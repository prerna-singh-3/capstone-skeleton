import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Production AI Product",
  description: "FlyRank AI Internship capstone project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-border">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="font-semibold">
              AI Product
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="transition-opacity hover:opacity-70"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition-opacity hover:opacity-70"
              >
                About
              </Link>

              <Link
                href="/health"
                className="transition-opacity hover:opacity-70"
              >
                Health
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}