"use client";
import Image from "next/image";
import React, { useState } from "react";
import { suspects } from "@/lib/suspects";
import FlipCard from "@/components/FlipCard";
import file from "@/public/Assets/file_menu_edited.png";
import { useClickSound } from "../clickAudioProvider";
import AudioModal from "@/components/modals/AudioModal";
import MapModal from "@/components/modals/MapModal";
import AutopsyModal from "@/components/modals/AutopsyModal";
import PolaroidsModal from "@/components/modals/PolaroidsModal";
import DocsModal from "@/components/modals/DocsModal";
import ImageDetailModal from "@/components/modals/ImageDetailModal";
import MobileMenu from "@/components/MobileMenu";

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
  "/Assets/DOCUMENTS/burnt_piece_of_paper.png",
  "/Assets/DOCUMENTS/ezra_black_note.png",
  "/Assets/DOCUMENTS/hollow_bell_codex.jpg",
  "/Assets/DOCUMENTS/mira_lang_drawing.jpg",
  "/Assets/DOCUMENTS/piece_of_paper_found_in_riley_garage.png",
  "/Assets/DOCUMENTS/Town_Census_2000.jpg",
];

// --- Main Page Component ---
export default function Page() {
  const { playClickSound } = useClickSound();

  const [modal, setModal] = useState<
    null | "audio" | "map" | "autopsy" | "polaroid" | "docs"
  >(null);
  const [autopsyIndex, setAutopsyIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative bottom-0 flex h-[calc(100vh-6rem)] flex-1">
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
          <button
            onClick={() => {
              setModal("audio");
              playClickSound();
            }}
          >
            <span>Audio</span>
          </button>
          <button
            onClick={() => {
              setModal("map");
              playClickSound();
            }}
          >
            <span>Map</span>
          </button>
          <button
            onClick={() => {
              setModal("autopsy");
              playClickSound();
            }}
          >
            <span>
              Autopsy
              <br />
              Report
            </span>
          </button>
          <button
            onClick={() => {
              setModal("polaroid");
              playClickSound();
            }}
          >
            <span>Polaroid</span>
          </button>
          <button
            onClick={() => {
              setModal("docs");
              playClickSound();
            }}
          >
            <span>Docs</span>
          </button>
        </div>
      </section>

      {/* --- Suspects Flip Cards --- */}
      <section className="relative grid h-full w-full items-center justify-center gap-5 overflow-auto p-20 xl:w-3/4 xl:grid-cols-3 xl:overflow-auto xl:p-0 xl:pr-20">
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

      <MobileMenu setModal={setModal} />

      {/* --- Modals --- */}

      <AudioModal
        open={modal === "audio"}
        onClose={() => setModal(null)}
        audioFiles={audioFiles}
      />

      <MapModal open={modal === "map"} onClose={() => setModal(null)} />

      <AutopsyModal
        open={modal === "autopsy"}
        onClose={() => setModal(null)}
        autopsyReports={autopsyReports}
        autopsyIndex={autopsyIndex}
        setAutopsyIndex={setAutopsyIndex}
      />

      <PolaroidsModal
        open={modal === "polaroid"}
        onClose={() => setModal(null)}
        polaroids={polaroids}
        setSelectedImage={setSelectedImage}
      />

      <DocsModal
        open={modal === "docs"}
        onClose={() => setModal(null)}
        documents={documents}
        setSelectedImage={setSelectedImage}
      />

      {/* --- Image Detail Viewer --- */}
      <ImageDetailModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
