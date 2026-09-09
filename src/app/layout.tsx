import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Your Name] — Portfolio",
  description: "[Your Name] — [Your Title]. Background, experience, and projects.",
  // Reachable by direct link, deliberately kept out of search — see
  // robots.txt for the backup layer. This is the part that actually works:
  // a robots.txt disallow alone can still let Google list a bare URL for a
  // page it was never allowed to crawl; noindex tells it to fully exclude
  // the page (title, snippet, and URL) once crawled.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
