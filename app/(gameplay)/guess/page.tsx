"use client";
import React, { useState } from "react";
import { suspects } from "@/lib/suspects"; // Assuming this path is correct
import { checkGuess } from "./actions";
import Image from "next/image";
import LoginModal from "@/components/loginModal";
import { useClickSound } from "../clickAudioProvider";

export default function GuessPage() {
  const { playClickSound } = useClickSound();

  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [guessesMade, setGuessesMade] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGuess = async () => {
    if (selected === null) return;

    const response = await checkGuess(selected);

    if (response.error) {
      if (response.error === "AUTH_REQUIRED") {
        setShowLoginModal(true);
      } else {
        setResult(response.error);
        if (response.gameOver) {
          window.location.href = "/cooldown";
        }
      }
      return;
    }

    setGuessesMade(response.newGuessCount ?? 0);

    if (response.correct) {
      setIsGameOver(true);
      window.location.href = "/winner";
    } else {
      if (response.gameOver) {
        setIsGameOver(true);
        window.location.href = "/cooldown";
      } else {
        setResult("Wrong! Try again.");
      }
    }
  };

  return (
    <div className="relative bottom-0 flex h-[calc(100vh-6rem)] flex-1 flex-col items-center justify-center">
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

      {/* Main Game Content */}
      <header className="p-2 text-center text-3xl sm:p-5 sm:text-4xl">
        Guess The Real Hollow
      </header>
      <p className="text-center text-2xl sm:text-3xl">
        You have {2 - guessesMade} guesses left.
      </p>

      <div className="my-1 flex flex-wrap items-center justify-center sm:my-4">
        {suspects.map((suspect) => (
          <button
            key={suspect.id}
            type="button"
            onClick={() => {
              setSelected(selected === suspect.id ? null : suspect.id);
              playClickSound();
            }}
            disabled={isGameOver}
            className={`m-3 mx-2 flex flex-col items-center justify-center rounded-lg p-2 transition-all ${selected === suspect.id ? "ring-4 ring-red-500" : ""} ${isGameOver ? "cursor-not-allowed opacity-50" : "hover:scale-105"} `}
          >
            <Image
              src={suspect.imageSrc} // Assuming imageSrc is a valid import
              alt={suspect.title}
              className="h-24 w-24 rounded-full border-2 border-gray-300 object-cover"
              width={96}
              height={96}
            />
            <p className="mt-2 text-center text-xl">{suspect.name}</p>
          </button>
        ))}
      </div>

      <button
        className="mt-5 w-[70vw] rounded-xl bg-red-700 px-8 py-3 text-2xl text-white disabled:opacity-50"
        onClick={() => {
          handleGuess();
          playClickSound();
        }}
        disabled={selected === null || isGameOver}
      >
        Submit Guess
      </button>

      {result && <div className="mt-6 text-2xl font-bold">{result}</div>}
    </div>
  );
}
