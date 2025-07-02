"use client";
import React, { useEffect, useState } from "react";
import { suspects } from "@/lib/suspects";
import { checkGuess } from "./actions";
import Image from "next/image";

export default function Guess() {
    const [selected, setSelected] = useState<number | null>(null);
    const [result, setResult] = useState<null | { correct: boolean }>(null);

    const handleGuess = async () => {
        if (selected === null) return;
        const res = await checkGuess(selected);
        setResult(res);
    };
    if (result && result.correct) {
        console.log("Correct guess!");
    } else if (result && !result.correct) {
        console.log("Wrong guess!");
    }
    return (
        <div className="flex h-[calc(100vh-6rem)] w-full flex-col  items-center justify-center p-44">
            <header className="text-4xl bates p-5 ">
                Guess The Real Hollow
            </header>
            <p className="text-3xl  ">
                you have only two guesses and if you get both the
            </p>
            <p className="text-3xl  ">guesses wrong you die and games end.</p>
            <div className="flex items-center justify-center">
                {suspects.map((suspect) => (
                    <button
                        key={suspect.id}
                        type="button"
                        onClick={() => setSelected(suspect.id)}
                        className={`flex flex-col items-center justify-center m-2 ${
                            selected === suspect.id ? "ring-4 ring-red-500" : ""
                        }`}
                    >
                        <Image
                            src={suspect.imageSrc.src}
                            alt={suspect.title}
                            className="h-24 w-24 rounded-full object-cover"
                            width={96}
                            height={96}
                        />
                        <p className="text-xl bates text-center">
                            {suspect.title}
                        </p>
                    </button>
                ))}
            </div>
            <div className="flex items-center justify-center h-32 w-96 bg-black/25 m-10 rounded-2xl">
                <button
                    className="text-2xl bates bg-red-700 text-white px-8 py-3 rounded-xl mt-4 disabled:opacity-50"
                    onClick={handleGuess}
                    disabled={selected === null}
                >
                    Enter
                </button>
            </div>
            {result && (
                <div className="mt-6 text-2xl bates">
                    {result.correct ? "Correct! 🎉" : "Wrong! 💀"}
                </div>
            )}
        </div>
    );
}
