"use client";

import styles from './page.module.scss';


export default function ContactSuccess() {
  return (
    <section className={styles.contactSuccess}>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.message}>Your message has been sent successfully. I’ll get back to you soon.</p>
      <button className={styles.button} onClick={() => window.location.href = '/'}>Back to main page</button>
    </section>
  );
}
