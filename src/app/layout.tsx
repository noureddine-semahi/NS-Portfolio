import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const TITLE = "Noureddine Semahi — Validation & QA Engineer";
const DESCRIPTION =
  "Ten years in quality and validation: FDA-regulated medical device software, Google mobile and wearable platforms, and autonomous vehicles at Waymo, Tesla and Avride. Based in Austin, open to remote.";

export const metadata: Metadata = {
  // Vercel exposes the production domain at build time, so a custom domain
  // is picked up automatically. The fallback is the current deployment URL.
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "ns-portfolio-mocha.vercel.app"}`,
  ),
  title: TITLE,
  description: DESCRIPTION,
  verification: {
    google: "xWuuQKIUyau5MDuq2a4t0vZmdSinA9SwZrrTKN2O7EM",
  },
  openGraph: {
    type: "website",
    siteName: "Noureddine Semahi",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
