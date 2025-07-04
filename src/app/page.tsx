"use client"

import Image from "next/image"
import Webring from "@/components/Webring"
import Link from "next/link";
import Badges from "@/components/Badges";

export default function Home() {
  return (
    <main className="relative w-full h-auto min-h-screen flex flex-col items-center py-8">
      <div className="mx-auto pointer-events-none select-none absolute inset-0 max-w-[1240px]"></div>
      <div className="mt-auto relative flex flex-col items-center gap-4 z-10 px-4">
        <Image
          src="/whoevenyou.jpg"
          alt="Cats playing with a computer"
          className="rounded-lg"
          width={340}
          height={182}
        />
        <p>
          My name is Alexander <br></br>known as
          <b> Murchikov</b>
          <br></br>Russian, 16 y.o. hdmi developer.
        </p>
        <nav className="font-mono text-white">
          <a
            href="https://github.com/immurchikov"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-90 active:opacity-80 hover:scale-[98%] active:scale-[96%] transition-all duration-200 inline-block"
          >
            [github]
          </a>
          <span className="mx-2">/</span>
          <a
            href="https://t.me/mypchikov"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-90 active:opacity-80 hover:scale-[98%] active:scale-[96%] transition-all duration-200 inline-block"
          >
            [telegram]
          </a>
          <span className="mx-2">/</span>
          <Link
            href="https://t.me/muriapub"
            className="underline hover:opacity-90 active:opacity-80 hover:scale-[98%] active:scale-[96%] transition-all duration-200 inline-block"
          >
            [blog]
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="https://discord.com/users/1175785170482233344"
            className="underline hover:opacity-90 active:opacity-80 hover:scale-[98%] active:scale-[96%] transition-all duration-200 inline-block"
          >
            [discord]
          </Link>
          <span className="mx-2">/</span>
          <br />
          <Link
            href="https://social.r4v3.party/@mur"
            className="underline hover:opacity-90 active:opacity-80 hover:scale-[98%] active:scale-[96%] transition-all duration-200 inline-block"
          >
            [fediverse]
          </Link>
        </nav>
      </div>
      <footer className="mt-auto  py-8 opacity-25 text-center w-full">
        <Webring />
        <Badges />
      </footer>
    </main>
  );
}
