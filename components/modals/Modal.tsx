import { X } from "lucide-react";

export default function Modal({
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
