import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./providers";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climate Farmers",
  description: "New App Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
