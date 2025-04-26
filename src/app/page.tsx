import Image from "next/image";

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
        <a
          href="https://discord.com/users/1175785170482233344"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px] rounded-md"
        >
          <svg viewBox="0 0 16 16" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
            ></path>
          </svg>
          <div className="flex flex-col">
          Discord
            <span className="text-xs opacity-50">[preferred method of contacting me!]</span>
          </div>
        </a>
        <a
          href="https://github.com/imMurchikov"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-[#373737] text-white flex items-center gap-4 w-fit px-4 py-4 min-w-[320px] rounded-md"
        >
         <svg stroke="white" fill="white" stroke-width="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <title></title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
          <div className="flex flex-col">
            Github
            <span className="text-xs opacity-50">
              [source code there :3]
            </span>
          </div>
        </a>
      </div>
      <footer className="mt-auto  py-8 opacity-25 text-center w-full">
        {"<<"} Copyright © 2025 murchikov. {">>"}
      </footer>
    </main>
  );
}
