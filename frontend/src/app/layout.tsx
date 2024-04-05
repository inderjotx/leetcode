import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider"
import { Navbar } from "@/components/Navbar";
import { Toaster } from 'sonner'
import { site } from '@/config'
import { SocketProvider } from "@/components/Provider/SocketProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  creator: site.creator
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster richColors />
          <SocketProvider>
            {children}
          </SocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
