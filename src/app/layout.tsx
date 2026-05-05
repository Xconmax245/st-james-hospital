import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Source_Serif_4, DM_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "St James's Hospital",
  description: "Ireland's largest acute academic teaching hospital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable} antialiased bg-warm-white text-body font-sans`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
