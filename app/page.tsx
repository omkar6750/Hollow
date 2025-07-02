import Image from "next/image";
import bg from "@/public/Assets/game_bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-background text-foreground relative">
      <Image
        className="absolute max-w-none h-auto w-auto min-h-screen min-w-screen object-cover object-center z-0"
        src={bg}
        alt="Background of the mystery game"
      />
      <nav>
        <Link href="/home">
          <button className="z-20 relative border-4 text-black bates text-5xl p-12 rounded-3xl">
            Login
          </button>
        </Link>
      </nav>
    </div>
  );
}
