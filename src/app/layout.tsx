import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import '@unocss/reset/tailwind.css'
import "@/styles/index.css";

const plex_mono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://murchikov.ru/"),
  title: "<< murchikov >>",
  description: "Something's cooking at home.",
  openGraph: {
    title: "<< murchikov >>",
    description: "Something's cooking at home.",
    images: [
      {
        url: "./whoevenyou.jpg",
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
