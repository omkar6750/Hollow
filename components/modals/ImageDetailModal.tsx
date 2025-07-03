import Image from "next/image";

export default function ImageDetailModal({
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
        <Image
          src={src}
          alt="Detailed view"
          height={700}
          width={700}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking the image
        />
      </div>
    </div>
  );
}
