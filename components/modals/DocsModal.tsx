import React from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function DocsModal({
  open,
  onClose,
  documents,
  setSelectedImage,
}: {
  open: boolean;
  onClose: () => void;
  documents: string[];
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const getDocName = (src: string) => {
    const fileName = src.split("/").pop()?.split(".")[0] || "";
    const nameWithSpaces = fileName.replace(/_/g, " ");
    return nameWithSpaces.charAt(0).toUpperCase() + nameWithSpaces.slice(1);
  };
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-2xl">
      <div
        className="max-h-[85vh] overflow-y-auto rounded-lg p-2 sm:p-4"
        style={{
          backgroundImage:
            "url('/Assets/wooden-floor-background_53876-88628.avif')",
        }}
      >
        <h2 className="mb-4 text-center text-2xl font-bold text-black">
          Documents
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {documents.map((src) => (
            <div key={src} className="flex flex-col items-center">
              <span className="mb-1 w-full text-center text-sm font-semibold text-wrap text-black">
                {getDocName(src)}
              </span>
              <Image
                key={src}
                src={src}
                alt="Document"
                height={300}
                width={300}
                className="h-auto w-full cursor-pointer rounded-md object-cover transition-transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
