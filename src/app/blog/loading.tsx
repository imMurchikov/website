import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Loading() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                background:
                    "black",
            }}
        >
            <div className="w-full max-w-[800px] p-4 sm:p-6 md:p-8 rounded-md bg-white/50 shadow-[0_0_26px_0_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-8">
                    <Link
                        href="/"
                        className="flex items-center text-black hover:opacity-90 active:opacity-80 transition-all duration-200"
                    >
                        <ArrowLeft size={20} className="mr-2 text-[#7a00e6]" />
                        <span className="font-bold uppercase font-mono">loading</span>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-8 h-8">
                        <div className="absolute top-0 left-0 w-8 h-8 rounded-full animate-spin"></div>
                        <div className="absolute top-0 left-0 w-8 h-8 rounded-full animate-spin delay-200"></div>
                        <div className="absolute top-0 left-0 w-8 h-8 rounded-full animate-spin delay-400"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}