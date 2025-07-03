"use client";

import React, {
  useRef,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";

interface ClickSoundContextType {
  playClickSound: () => void;
}

const ClickSoundContext = createContext<ClickSoundContextType | null>(null);

export const useClickSound = () => {
  const context = useContext(ClickSoundContext);
  if (!context) {
    throw new Error("useClickSound must be used within a ClickSoundProvider");
  }
  return context;
};

export default function ClickSoundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clickRef1 = useRef<HTMLAudioElement>(null);
  const clickRef2 = useRef<HTMLAudioElement>(null);
  const nextSoundIndex = useRef(0);

  // This effect will run once on the client to handle the first user interaction,
  // which is required by some browsers to allow audio playback.
  useEffect(() => {
    const unlockAudio = () => {
      // A silent play attempt to unlock the audio context.
      clickRef1.current
        ?.play()
        .then(() => clickRef1.current?.pause())
        .catch(() => {});
      clickRef2.current
        ?.play()
        .then(() => clickRef2.current?.pause())
        .catch(() => {});
      // Remove the listener after the first interaction.
      document.removeEventListener("click", unlockAudio);
    };

    // Listen for the first click to unlock audio.
    document.addEventListener("click", unlockAudio);

    return () => {
      document.removeEventListener("click", unlockAudio);
    };
  }, []); // Empty dependency array ensures this runs only once.

  const playClickSound = useCallback(() => {
    const soundToPlay =
      nextSoundIndex.current === 0 ? clickRef1.current : clickRef2.current;

    if (soundToPlay) {
      soundToPlay.currentTime = 0;
      soundToPlay.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
      // Alternate for the next click
      nextSoundIndex.current = nextSoundIndex.current === 0 ? 1 : 0;
    }
  }, []);

  return (
    <ClickSoundContext.Provider value={{ playClickSound }}>
      <audio
        ref={clickRef1}
        src="/Assets/typewriter-soft-click.wav"
        preload="auto"
      />
      <audio
        ref={clickRef2}
        src="/Assets/hard-typewriter-click.wav"
        preload="auto"
      />
      {children}
    </ClickSoundContext.Provider>
  );
}
