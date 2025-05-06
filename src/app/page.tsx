import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-auto min-h-screen flex flex-col items-center py-8">
      <div className="border-x-[1px] border-dashed border-[#3b3b3b] mx-auto pointer-events-none select-none absolute inset-0 max-w-[1240px]"></div>
      <Image
        className="absolute select-none pointer-events-none bg-cover w-full h-full object-contain"
        src="/build.png"
        alt="Hero"
        fill
      />
      <div className="mt-auto relative flex flex-col items-center gap-4 z-10 px-4">
        <Image
          src="/pc-cats.webp"
          alt="Cats playing with a computer"
          className="rounded-md"
          width={350}
          height={370}
        />
        <p>
          ... There&apos;s nothing here yet. <br></br>Follow the me
          instead on social.
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
            href="/blog"
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
        </nav>
      </div>
      <footer className="mt-auto  py-8 opacity-25 text-center w-full">
        {"<<"} Copyright © 2025 murchikov. {">>"}
      </footer>
    </main>
  );
}
