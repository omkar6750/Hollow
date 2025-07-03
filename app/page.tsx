import Image from "next/image";
import bg from "@/public/Assets/game_bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Image
        className="absolute z-0 h-auto min-h-screen w-auto max-w-none min-w-screen object-cover object-center"
        src={bg}
        alt="Background of the mystery game"
      />
      <nav>
        <Link href="/home">
          <button className="bates relative z-20 rounded-3xl border-4 p-12 text-5xl text-black">
            Play
          </button>
        </Link>
      </nav>
    </div>
  );
}
