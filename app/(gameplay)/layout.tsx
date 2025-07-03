"use client";
import React from "react";
import bg from "@/public/Assets/game_bg.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MusicPlayer from "./audioProvider";
import ClickSoundProvider from "./clickAudioProvider";

export default function GamePlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const simplifiedLayoutPages = ["/winner", "/cooldown"];
  if (simplifiedLayoutPages.includes(pathname)) {
    return (
      <div className="relative h-screen w-screen bg-black">
        <MusicPlayer />
        {children}
      </div>
    );
  }
  return (
    <ClickSoundProvider>
      <div className="relative flex flex-col overflow-hidden">
        <nav className="relative top-0 z-10 flex h-24 w-full items-center justify-center">
          <div className="absolute top-6 z-10 flex justify-center space-x-14 lg:right-96 lg:px-8">
            {["Home", "Story", "Guess", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="bates text-xs sm:text-lg xl:text-2xl"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="bates absolute top-6 left-8 z-10 hidden text-xl lg:px-4 xl:block xl:text-3xl">
            The Hollow
          </p>
          <div className="hidden sm:block">
            <MusicPlayer />
          </div>
        </nav>
        <Image
          className="absolute z-0 h-auto min-h-screen w-auto max-w-none min-w-screen object-cover object-center"
          src={bg}
          alt="Background of the mystery game"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

        <div className="relative h-full w-full">{children}</div>
      </div>
    </ClickSoundProvider>
  );
}
