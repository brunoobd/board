import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap",
  },
  description: "Follow the development progress of our entire platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interFont.className}>
      <body className="bg-navy-950 text-navy-50 antialiased">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
