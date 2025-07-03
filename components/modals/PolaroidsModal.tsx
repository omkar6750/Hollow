import React from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function PolaroidsModal({
  open,
  onClose,
  polaroids,
  setSelectedImage,
}: {
  open: boolean;
  onClose: () => void;
  polaroids: string[];
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-2xl">
      <div
        className="rounded-lg p-4"
        style={{
          backgroundImage:
            "url('/Assets/wooden-floor-background_53876-88628.avif')",
        }}
      >
        <h2 className="mb-4 text-center text-2xl font-bold text-black">
          Polaroids
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {polaroids.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Polaroid"
              width={300}
              height={300}
              className="h-auto w-full cursor-pointer rounded-md object-cover transition-transform hover:scale-105"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
