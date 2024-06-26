import type { Metadata } from "next";
import { interFont, someTypeFont } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zachary Davies Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${interFont.variable} ${someTypeFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
