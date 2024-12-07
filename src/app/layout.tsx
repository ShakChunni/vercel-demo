import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSE471 Deployment Demo",
  description: "A basic starter project to demonstrate deployment on Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
