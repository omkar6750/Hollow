import type { Metadata } from "next";
import "./globals.css";
import { fontBasic, fontMystery } from "./fonts";

export const metadata: Metadata = {
  title: "Hollow",
  description: "Mystery and intrigue await in the Hollow universe.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBasic.variable} ${fontMystery.variable}`}>
        {children}
      </body>
    </html>
  );
}
