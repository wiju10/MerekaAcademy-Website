import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import TopNav from "./components/topnav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grow My Team",
  description: "We help you manage your employees more efficiently ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <TopNav />
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
