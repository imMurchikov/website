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
      <script defer src="https://anal.murchikov.ru/script.js" data-website-id="df32af06-89b9-464d-b155-a9831f9f9705" />
      <body className={plex_mono.className}>{children}</body>
    </html>
  );
}
