"use client";

import { Music } from "lucide-react";
import audio from "@/public/Assets/audio.png";
import mute from "@/public/Assets/mute.png";
import React, { useState, useRef } from "react";
import Image from "next/image";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/Assets/bg_music.mp3" loop />

      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-20 rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-700"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/35">
            <Image src={audio} alt="" className="h-8 w-8 rounded-full" />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/35">
            <Image src={mute} alt="" className="h-8 w-8 rounded-full" />
          </div>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
