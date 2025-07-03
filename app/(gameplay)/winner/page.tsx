// app/winner/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function WinnerPage() {
  const session = await auth();

  // Protect the route: only logged-in users can see this page.
  if (!session?.user) {
    redirect("/guess");
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <h1 className="bates text-6xl">Case Solved</h1>
      <h2 className="text-8xl">You Caught The Hollow</h2>
    </div>
  );
}
