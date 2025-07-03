import Image from "next/image";
import bg from "@/public/Assets/landing_page.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Image
        className="absolute z-0 h-auto min-h-screen w-auto max-w-none min-w-screen object-cover object-center"
        src={bg}
        alt="Background of the mystery game"
      />
      <h1 className="bates z-20 mb-6 text-5xl sm:mb-10 sm:text-8xl">
        The Hollow
      </h1>
      <h2 className="z-20 mb-10 text-2xl sm:mb-16 sm:text-3xl">
        {" "}
        Chapter One: Nethermoor
      </h2>
      <Link href="/home">
        <button className="bates relative z-20 m-5 rounded-3xl text-3xl text-white sm:text-4xl">
          Play
        </button>
      </Link>
    </div>
  );
}
