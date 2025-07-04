"use client";

import MusicPlayer from "@/app/(gameplay)/audioProvider";
import { useClickSound } from "@/app/(gameplay)/clickAudioProvider";
import { AudioLines, Map, FileText, Camera, FileSearch } from "lucide-react";
import React from "react";

export default function MobileMenu({
  setModal,
}: {
  setModal: (val: "audio" | "map" | "autopsy" | "polaroid" | "docs") => void;
}) {
  const { playClickSound } = useClickSound();

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full justify-around bg-gradient-to-b from-transparent to-black py-3 sm:flex xl:hidden">
      <button
        onClick={() => {
          setModal("audio");
          playClickSound();
        }}
        className="flex flex-col items-center text-white"
      >
        <AudioLines size={24} />
      </button>
      <button
        onClick={() => {
          setModal("map");
          playClickSound();
        }}
        className="flex flex-col items-center text-white"
      >
        <Map size={24} />
      </button>
      <button
        onClick={() => {
          setModal("autopsy");
          playClickSound();
        }}
        className="flex flex-col items-center text-white"
      >
        <FileText size={24} />
      </button>
      <button
        onClick={() => {
          setModal("polaroid");
          playClickSound();
        }}
        className="flex flex-col items-center text-white"
      >
        <Camera size={24} />
      </button>
      <button
        onClick={() => {
          setModal("docs");
          playClickSound();
        }}
        className="flex flex-col items-center text-white"
      >
        <FileSearch size={24} />
      </button>
      <MusicPlayer />
    </div>
  );
}
