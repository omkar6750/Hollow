import Image from "next/image";
import Modal from "./Modal";
import AudioPlayer from "../AudioPlayer";

export default function AudioModal({
  open,
  onClose,
  audioFiles,
}: {
  open: boolean;
  onClose: () => void;
  audioFiles: { src: string; label: string }[];
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="relative flex h-full max-h-[90vh] w-full max-w-[90vw] flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-6 sm:px-8 sm:py-10">
        <Image
          src="/Assets/wooden-floor-background_53876-88628.avif"
          alt="background"
          height={300}
          width={300}
          className="absolute inset-0 z-0 h-full w-full rounded-lg object-cover"
        />
        <h2 className="z-10 mb-4 text-2xl text-black">Interview Tapes</h2>
        <ul className="z-10">
          {audioFiles.map((audio) => (
            <li key={audio.src} className="mb-2">
              <span className={`text-black transition-colors`}>
                {audio.label}
              </span>
              <AudioPlayer src={audio.src} />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
