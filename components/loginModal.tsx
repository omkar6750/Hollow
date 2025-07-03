"use client";
import { signIn } from "next-auth/react";
import signInButton from "@/public/Assets/web_dark_rd_ctn.svg";
import Image from "next/image";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="mx-4 max-w-sm rounded-xl bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Please Sign in
        </h2>
        <p className="mb-6 text-gray-600">You must sign in to make a guess.</p>

        <button
          onClick={() => signIn("google")}
          aria-label="Sign in with Google"
          className="flex w-full items-center justify-center gap-3 rounded-md"
        >
          <Image src={signInButton} alt="google sign in" />
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
