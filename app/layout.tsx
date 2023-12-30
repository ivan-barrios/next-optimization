import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Optimization",
  description: "Learn how to optimize your Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
