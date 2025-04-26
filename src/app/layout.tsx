import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex_mono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://murchikov.ru/"),
  title: "<< murchikov.ru >>",
  description: "Something's cooking at home.",
  openGraph: {
    title: "<< murchikov.ru >>",
    description: "Something's cooking at home.",
    images: [
      {
        url: "./pc-cats.webp",
      },
    ],
    url: "https://murchikov.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plex_mono.className}>{children}</body>
    </html>
  );
}
