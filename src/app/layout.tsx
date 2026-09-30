import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noureddine Semahi — Validation & QA Engineer",
  description:
    "Ten years in quality and validation: FDA-regulated medical device software, Google mobile and wearable platforms, and autonomous vehicles at Waymo, Tesla and Avride. Based in Austin, open to remote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
