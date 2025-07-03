// app/cooldown/page.tsx

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const prisma = new PrismaClient();

export default async function CooldownPage() {
  const session = await auth();

  // If user is not logged in, they can't be in cooldown. Redirect.
  if (!session?.user?.id) {
    redirect("/guess");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { guessCount: true },
  });

  // If user is logged in but hasn't used up their guesses, they shouldn't be here.
  if (!user || user.guessCount < 2) {
    redirect("/guess");
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <h1 className="bates m-10 mb-12 text-center text-4xl sm:m-20 sm:text-6xl">
        You&apos;ve exhausted your chances
      </h1>
      <h2 className="bates mb-20 text-center text-4xl sm:m-20 sm:text-6xl">
        He suspects You
      </h2>
      <h3 className="bates text-center text-3xl sm:text-5xl">
        Lay low till tomorrow
      </h3>
    </div>
  );
}
