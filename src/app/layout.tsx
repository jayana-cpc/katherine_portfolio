import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import DarkModeToggle from "../components/General/DarkModeToggle";
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
        <MantineProvider defaultColorScheme="dark" >{children}</MantineProvider>
      </body>
    </html>
  );
}
