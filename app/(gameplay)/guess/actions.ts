"use server";

import { suspects } from "@/lib/suspects";

export async function checkGuess(suspectId: number) {
    // Replace with your real logic for the correct suspect
    const correctId = 1; // e.g., suspects.find(s => s.isReal).id

    return {
        correct: suspectId === correctId,
    };
}
