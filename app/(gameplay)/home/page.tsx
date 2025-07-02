"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { suspects } from "@/lib/suspects";
import FlipCard from "@/components/FlipCard";
import file from "@/public/Assets/file_menu_edited.png";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// --- Asset Definitions ---
const audioFiles = [
  {
    src: "/Assets/INTERROGATION_AUDIO/Ezra_Black_The_Historian.mp3",
    label: "Ezra Black",
  },
  {
    src: "/Assets/INTERROGATION_AUDIO/Father_Elric Vale.mp3",
    label: "Father Elric Vale",
  },
  {
    src: "/Assets/INTERROGATION_AUDIO/Lyra Quinn_The_Librarian.mp3",
    label: "Lyra Quinn",
  },
  {
    src: "/Assets/INTERROGATION_AUDIO/Mira_Lang_orphonage_caretaker.mp3",
    label: "Mira Lang",
  },
  {
    src: "/Assets/INTERROGATION_AUDIO/Riley_Thorn_Mechanic.mp3",
    label: "Riley Thorn",
  },
];
const mapImage = "/Assets/MAP/Nethermoor_map.png";
const polaroids = [
  "/Assets/CRIME_SCENE/caleb.jpg",
  "/Assets/CRIME_SCENE/mia.jpg",
  "/Assets/CRIME_SCENE/noah.jpg",
];
const autopsyReports = [
  "/Assets/AUTOPSY_REPORT/caleb.jpg",
  "/Assets/AUTOPSY_REPORT/mia.jpg",
  "/Assets/AUTOPSY_REPORT/noah.jpg",
];
const documents = [
  "/Assets/DOCUMENTS/burntpieceofpaper.png",
  "/Assets/DOCUMENTS/ezrablack_note.png",
  "/Assets/DOCUMENTS/hollow_bell_codex.jpg",
  "/Assets/DOCUMENTS/miralang_drawing.jpg",
  "/Assets/DOCUMENTS/pieceofpaperfoundinrileygarage.png",
  "/Assets/DOCUMENTS/Town_Census_2000.jpg",
];

// --- Reusable Modal Component ---
function Modal({
  open,
  onClose,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className={`relative ${className}`}>
        {children}
        <button
          className="absolute top-2 right-2 z-20 rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/80"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}

// --- Detailed Image View Modal ---
function ImageDetailModal({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div className="relative p-4">
        <img
          src={src}
          alt="Detailed view"
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking the image
        />
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function Page() {
  const [modal, setModal] = useState<
    null | "audio" | "map" | "autopsy" | "polaroid" | "docs"
  >(null);
  const [autopsyIndex, setAutopsyIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioPlay = (
    e: React.SyntheticEvent<HTMLAudioElement, Event>,
  ) => {
    if (
      currentAudioRef.current &&
      currentAudioRef.current !== e.currentTarget
    ) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = e.currentTarget;
  };

  return (
    <div className="relative bottom-0 flex h-[calc(100vh-6rem)] flex-1 flex-row">
      {/* --- Left Navigation Panel --- */}
      <section className="relative z-10 hidden h-full w-1/2 flex-col overflow-hidden xl:flex">
        <Image
          src={file}
          alt="file"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="bates absolute left-0 flex h-full w-1/3 flex-col items-end justify-center space-y-16 px-10 pb-10 text-3xl">
          <button onClick={() => setModal("audio")}>
            <span>Audio</span>
          </button>
          <button onClick={() => setModal("map")}>
            <span>Map</span>
          </button>
          <button onClick={() => setModal("autopsy")}>
            <span>
              Autopsy
              <br />
              Report
            </span>
          </button>
          <button onClick={() => setModal("polaroid")}>
            <span>Polaroid</span>
          </button>
          <button onClick={() => setModal("docs")}>
            <span>Docs</span>
          </button>
        </div>
      </section>

      {/* --- Suspects Flip Cards --- */}
      <section className="grid-col-1 relative grid h-full w-full items-center justify-center gap-10 overflow-auto p-20 xl:w-3/4 xl:grid-cols-3 xl:overflow-hidden xl:p-0 xl:pr-20">
        {suspects.map((suspect) => (
          <FlipCard
            key={suspect.id}
            imageSrc={suspect.imageSrc}
            title={suspect.title}
            description={suspect.description}
          />
        ))}
        <div className="flex h-full w-full items-center justify-center xl:aspect-[5/6] xl:max-w-xs xl:justify-self-end">
          <span className="bates text-shadow-white- text-4xl font-bold text-white">
            Suspects
          </span>
        </div>
      </section>

      {/* --- Modals --- */}
      {/* Audio Modal */}
      <Modal open={modal === "audio"} onClose={() => setModal(null)}>
        <div className="relative flex h-full w-full flex-col items-center justify-center p-20">
          <img
            src="Assets/wooden-floor-background_53876-88628.avif"
            alt="background"
            className="absolute inset-0 z-0 h-full w-full rounded-lg object-cover"
          />

          <h2 className="z-10 mb-4 text-2xl text-black">Interview Tapes</h2>

          <ul className="z-10">
            {audioFiles.map((audio) => (
              <li key={audio.src} className="mb-2">
                <span className="text-black">{audio.label}</span>
                <audio
                  src={audio.src}
                  controls
                  className="ml-2"
                  onPlay={(e) => {
                    // Pause previous audio if playing

                    if (
                      currentAudioRef.current &&
                      currentAudioRef.current !== e.currentTarget
                    ) {
                      currentAudioRef.current.pause();

                      currentAudioRef.current.currentTime = 0;
                    }

                    currentAudioRef.current = e.currentTarget;

                    setPlaying(audio.src);
                  }}
                  onPause={(e) => {
                    if (currentAudioRef.current === e.currentTarget) {
                      setPlaying(null);
                    }
                  }}
                  style={{
                    height: "40px",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Modal>

      {/* Map Modal */}
      <Modal
        open={modal === "map"}
        onClose={() => setModal(null)}
        className="h-auto w-auto"
      >
        <div className="relative overflow-hidden rounded-lg border-8 border-yellow-800/50">
          <img
            src={mapImage}
            alt="Map"
            className="max-h-[85vh] object-contain"
          />
        </div>
      </Modal>

      {/* Autopsy Modal */}
      <Modal
        open={modal === "autopsy"}
        onClose={() => setModal(null)}
        className="h-auto w-auto"
      >
        <div className="relative">
          <img
            src={autopsyReports[autopsyIndex]}
            alt={`Autopsy Report ${autopsyIndex + 1}`}
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

      {/* Polaroid Modal */}
      <Modal
        open={modal === "polaroid"}
        onClose={() => setModal(null)}
        className="w-full max-w-2xl"
      >
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
              <img
                key={src}
                src={src}
                alt="Polaroid"
                className="h-auto w-full cursor-pointer rounded-md object-cover transition-transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </Modal>

      {/* Docs Modal */}
      <Modal
        open={modal === "docs"}
        onClose={() => setModal(null)}
        className="w-full max-w-4xl"
      >
        <div
          className="rounded-lg p-4"
          style={{
            backgroundImage:
              "url('/Assets/wooden-floor-background_53876-88628.avif')",
          }}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-black">
            Documents
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {documents.map((src) => (
              <img
                key={src}
                src={src}
                alt="Document"
                className="h-auto w-full cursor-pointer rounded-md object-cover transition-transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </Modal>

      {/* --- Image Detail Viewer --- */}
      <ImageDetailModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
