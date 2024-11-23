import "./globals.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";
import { ScrollArrow } from "@/components/arrow/ScrollArrow";
import { MessengerChat } from "@/components/MessengerChat";

const myFont = localFont({ src: "../fonts/FiraGO-Regular.ttf" });

export const metadata = {
  title: "Medico - official",
  description: "Medico - Your dream dental clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        <ScrollArrow />
        {children}
        <MessengerChat />
        <Footer />
      </body>
    </html>
  );
}
