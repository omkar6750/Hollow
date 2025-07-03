"use client";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutopsyModal({
  open,
  onClose,
  autopsyReports,
  autopsyIndex,
  setAutopsyIndex,
}: {
  open: boolean;
  onClose: () => void;
  autopsyReports: string[];
  autopsyIndex: number;
  setAutopsyIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Modal open={open} onClose={onClose} className="h-auto w-auto">
      <div className="relative">
        <Image
          src={autopsyReports[autopsyIndex]}
          alt={`Autopsy Report ${autopsyIndex + 1}`}
          height={700}
          width={700}
          className="max-h-[90vh] max-w-[80vw] rounded-lg object-contain"
        />
        <button
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
          onClick={() =>
            setAutopsyIndex((prev) =>
              prev === 0 ? autopsyReports.length - 1 : prev - 1,
            )
          }
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
          onClick={() =>
            setAutopsyIndex((prev) =>
              prev === autopsyReports.length - 1 ? 0 : prev + 1,
            )
          }
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
        <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {autopsyIndex + 1} / {autopsyReports.length}
        </div>
      </div>
    </Modal>
  );
}
