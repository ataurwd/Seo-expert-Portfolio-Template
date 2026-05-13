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
  title: "SEO Expert & Growth Strategist | Rank Higher. Grow Faster.",
  description: "High-converting SEO strategies to increase organic traffic, leads, and revenue. Expert SEO auditing, technical SEO, and data-driven growth.",
  keywords: ["SEO Expert", "Digital Growth Strategist", "Organic Traffic", "SEO Audit", "Search Engine Optimization"],
  authors: [{ name: "SEO Expert" }],
  openGraph: {
    title: "SEO Expert & Growth Strategist | Rank Higher. Grow Faster.",
    description: "Data-driven SEO strategies for modern brands.",
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
