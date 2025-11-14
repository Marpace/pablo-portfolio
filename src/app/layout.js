import './styles/globals.scss'; 
import { Roboto, Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],  
  weights: ["400", "500", "700"], 
  style: ["normal", "italic"],    
  display: "swap",                
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  display: "swap",
});



export const metadata = {
  title: "Web Dev Portfolio",
  description: "Full Stack Web Developer Portfolio for Pablo Almonacid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${bebasNeue.className}`}>
        {children}
      </body>
    </html>
  );
}
