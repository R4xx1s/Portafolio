import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev.Raxxis | Fernando Tocto — Full-Stack Developer",
  description:
    "Portafolio de Cesar Fernando Tocto Cumbay (Dev.Raxxis). Desarrollador Full-Stack e Ingeniero de Sistemas.",
  icons: {
    icon: "/images/Raxxdev.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${mPlusRounded.variable} antialiased`}
    >
      <body className="bg-[#202023] text-[rgba(255,255,255,0.92)] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
