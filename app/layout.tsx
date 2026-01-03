import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Construction Company Nepal",
    template: "%s | Construction Company Nepal",
  },
  description: "Professional construction services in Nepal",
  openGraph: {
    title: "S&A Construction Company Nepal",
    description:
      "Trusted construction company delivering quality projects across Nepal.",
    images: ["/myquicklogo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S&A Construction Company Nepal",
    description: "Professional construction and engineering services in Nepal.",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">{children}</body>
    </html>
  );
}
