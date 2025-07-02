import React from "react";
import bg from "@/public/Assets/game_bg.png";
import Image from "next/image";
import Link from "next/link";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden flex flex-col ">
            <nav className="relative top-0 w-full h-24 flex items-center justify-center z-10">
                <div className="absolute flex justify-center space-x-14 lg:px-8 top-6 lg:right-96 z-10">
                    {["Home", "Story", "Guess", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="bates text-xl xl:text-2xl"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <p className="bates hidden xl:block absolute z-10 top-6 text-xl xl:text-3xl lg:px-4 left-8   ">
                    The Hollow
                </p>
                <button
                    className="xl:hidden bates fixed  left-4 z-10 top-4 text-white px-4 py-2 shadow"
                    aria-label="Open menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </nav>
            <Image
                className="absolute max-w-none h-auto w-auto min-h-screen min-w-screen object-cover object-center z-0 "
                src={bg}
                alt="Background of the mystery game"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 pointer-events-none" />

            <div className="relative h-full w-full ">{children}</div>
        </div>
    );
}
