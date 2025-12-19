"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import styles from "./Contact.module.scss";
import { useRouter } from "next/navigation";


export default function Contact({ currentSection, setCurrentSection, isNavScrolling, setIsNavScrolling }) {

  const contactRef = useRef(null);

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hello, I would like to get in touch with you.",
    company: "", // honeypot
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");


  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && setCurrentSection) setCurrentSection(entry.target.id);
  }, [inView]);

  useEffect(() => {
    if (isNavScrolling && currentSection === "contact" && !inView && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      setIsNavScrolling(false);
    }, 600);
  }, [currentSection]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "Hello, I would like to get in touch with you.",
      company: "",
    });

    router.push("/contact/success");
  } catch (err) {
    setStatus("error");
    setErrorMessage(err.message || "Could not send message. Please try again.");
  }
  };

  return (
    <section 
      className={styles.contact} 
      id="contact" 
      ref={(node) => {
        ref(node);          // intersection observer ref
        contactRef.current = node; // scroll ref
      }}>
      <h2 className="section-title">Contact me</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input 
          placeholder="Name"
          className={styles.input} 
          type="text" name="name" 
          onChange={handleChange}
          value={formData.name}
          required 
        />
        <input 
          placeholder="Email"
          className={styles.input} 
          type="email" name="email" 
          onChange={handleChange} 
          value={formData.email}
          required 
        />
        <input 
          placeholder="Phone"
          className={styles.input} 
          type="tel" name="phone" 
          onChange={handleChange} 
          value={formData.phone}
        />
        <textarea 
          className={styles.textarea} 
          name="message" 
          onChange={handleChange}
          value={formData.message}
          required
          ></textarea>

        {/* Honeypot field (bots will fill this) */}
        <input
          type="text"
          name="company"
          value={formData.company || ""}
          onChange={handleChange}
          className={styles.honeypot}
          tabIndex="-1"
          autoComplete="off"
        />



        <button className={styles.button} type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {status === "error" && (
          <p className={styles.error}>{errorMessage}</p>
        )}

        {/* Sends the user to a thank you page after submission */}
        <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
      </form>
    </section>
  );
}