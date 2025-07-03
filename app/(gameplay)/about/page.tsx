import React from "react";

export default function About() {
  return (
    <div className="relative bottom-0 flex h-[calc(100vh-6rem)] flex-1">
      <div className="relative grid h-full w-full items-center justify-center overflow-auto text-lg sm:text-3xl">
        <header className="bates p-14 text-center text-4xl">About</header>
        <p className="p-8 text-center">
          The Hollow is an interactive horror-crime mystery click-based web game
          set in the eerie, fog-drenched town of Nethermoor. You play as a
          recently transferred city detective unraveling a series of chilling
          child murders, strange town rituals, and a dark, forgotten presence
          known only as The Hollow. Using crime scenes, evidence, audio logs,
          journal entries, and cryptic interviews, players must piece together
          the truth — but beware: you only get two chances to solve the mystery.
          Fail, and the truth is lost forever.
        </p>
        <p className="pb-10 text-center text-3xl underline sm:text-4xl">
          Credits
        </p>
        <ul className="pb-2 text-center">
          <li>Story, Game Design & Worldbuilding</li>
        </ul>
        <p className="pb-2 text-center text-4xl sm:text-5xl">Deepankar Paria</p>
        <p className="pb-14 text-center">
          (Writer, Creative Director, Visual Lore Design)
        </p>
        <p className="pb-2 text-center">Programming & Backend Development</p>
        <p className="pb-2 text-center text-4xl sm:text-5xl">Omkar Pawar</p>
        <p className="pb-10 text-center">
          (Game Logic, Web Functionality, Audio Integration)
        </p>
      </div>
    </div>
  );
}
