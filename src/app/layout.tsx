import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ly Minh Khang — Data Analytics & Credit Risk",
  description:
    "Portfolio of Ly Minh Khang: Economic Mathematics senior specializing in Data Analytics, Credit Risk Modeling, and AI-Assisted Workflows.",
  keywords: [
    "Data Analytics",
    "Credit Risk",
    "Fintech",
    "Machine Learning",
    "Python",
    "Power BI",
  ],
  authors: [{ name: "Ly Minh Khang" }],
  openGraph: {
    title: "Ly Minh Khang — Data Analytics & Credit Risk",
    description:
      "Economic Mathematics senior bridging quantitative analysis and actionable fintech strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
