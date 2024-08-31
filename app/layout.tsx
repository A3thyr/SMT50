import type { Metadata } from "next";
import { Inter, Manrope, Montserrat } from "next/font/google";
import "../public/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "SMT50",
  description: "SMT50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
