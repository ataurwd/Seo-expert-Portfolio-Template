import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipto Das SEO | Boost Your Website's Visibility",
  description: "Dipto Das is an SEO expert with over 4 years of experience specializing in on-page, off-page, and technical SEO to drive organic traffic.",
  keywords: ["Dipto Das SEO", "SEO Expert", "Organic Traffic", "SEO Audit", "Search Engine Optimization"],
  authors: [{ name: "Dipto Das" }],
  openGraph: {
    title: "Dipto Das SEO | Expert Digital Growth Strategist",
    description: "Measurable results and data-driven SEO strategies to help your business succeed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
