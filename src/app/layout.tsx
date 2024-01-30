import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple todo APP",
  description: "simple todo app for learning next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
