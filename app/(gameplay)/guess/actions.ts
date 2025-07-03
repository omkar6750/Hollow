"use server";

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function checkGuess(suspectId: number) {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "AUTH_REQUIRED" };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    return { error: "User not found." };
  }

  if (user.guessCount >= 2) {
    return { error: "You have no more guesses left.", gameOver: true };
  }

  // Increment guess count in the database
  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: { guessCount: { increment: 1 } },
  });

  const correctId = 1; // The actual ID of the correct suspect
  const isCorrect = suspectId === correctId;

  return {
    correct: isCorrect,
    newGuessCount: updatedUser.guessCount,
    gameOver: updatedUser.guessCount >= 2 && !isCorrect,
  };
}
