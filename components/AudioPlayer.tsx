"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Global tracker for active audio
let currentlyPlaying: HTMLAudioElement | null = null;

const playerSetters = new Set<React.Dispatch<React.SetStateAction<boolean>>>();

function resetAllPlayers(except?: React.RefObject<HTMLAudioElement | null>) {
  playerSetters.forEach((setPlaying) => setPlaying(false));

  if (currentlyPlaying && currentlyPlaying !== except?.current) {
    currentlyPlaying.pause();
    currentlyPlaying.currentTime = 0;
  }
}

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    playerSetters.add(setIsPlaying);
    return () => {
      playerSetters.delete(setIsPlaying);
    };
  }, []);

  const handlePlay = () => {
    if (!audioRef.current) return;
    resetAllPlayers(audioRef);

    audioRef.current.play();
    currentlyPlaying = audioRef.current;
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? handlePause() : handlePlay();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime =
      (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <div
      className={`w-full rounded-lg border border-yellow-700 bg-[#2d261e] p-2 shadow-lg sm:max-w-md sm:p-5`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={togglePlay}
          className="rounded-full bg-yellow-800 p-1.5 text-white hover:bg-yellow-700 sm:p-2.5"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="h-1 w-full cursor-pointer accent-yellow-600"
        />
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
