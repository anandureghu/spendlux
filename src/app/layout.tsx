import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Spendlux - Track smarter. Spend better.",
  description:
    "A sleek, cross-platform PWA for effortless personal finance tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}
