import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { BackgroundEffectProvider } from "@/context/BackgroundEffectContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katherine Lee",
  description: "Portfolio for Katherine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" ><BackgroundEffectProvider>{children}</BackgroundEffectProvider></MantineProvider>
      </body>
    </html>
  );
}
