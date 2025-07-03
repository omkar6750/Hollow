import React from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function MapModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div>
      <Modal open={open} onClose={onClose} className="h-auto w-auto">
        <div className="relative overflow-hidden rounded-lg border-8 border-yellow-800/50">
          <Image
            src="/Assets/MAP/Nethermoor_map.png"
            alt="Map"
            width={800}
            height={700}
            className="max-h-[85vh] object-contain"
          />
        </div>
      </Modal>
    </div>
  );
}
