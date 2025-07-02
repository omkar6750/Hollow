import React from "react";

export default function About() {
    return (
        <div className="flex h-[calc(100vh-6rem)] w-full flex-col  items-center justify-center p-44">
            <header className="text-4xl bates p-5 ">About</header>
            <p className="text-3xl text-center p-8 ">
                The Hollow is an interactive horror-crime mystery click-based
                web game set in the eerie, fog-drenched town of Nethermoor. You
                play as a recently transferred city detective unraveling a
                series of chilling child murders, strange town rituals, and a
                dark, forgotten presence known only as The Hollow. Using crime
                scenes, evidence, audio logs, journal entries, and cryptic
                interviews, players must piece together the truth — but beware:
                you only get two chances to solve the mystery. Fail, and the
                truth is lost forever.
            </p>
            <p className="text-4xl text-center pb-10 underline ">Credits</p>
            <ul className="text-3xl text-center pb-2 ">
                <li>Story, Game Design & Worldbuilding</li>
            </ul>
            <p className="text-5xl text-center pb-2">Deepankar Paria</p>
            <p className="text-3xl text-center pb-14 ">
                (Writer, Creative Director, Visual Lore Design)
            </p>
            <p className="text-3xl text-center pb-2 ">
                Programming & Backend Development
            </p>
            <p className="text-5xl text-center pb-2 ">Omkar Pawar</p>
            <p className="text-3xl text-center pb-10 ">
                (Game Logic, Web Functionality, Audio Integration)
            </p>
        </div>
    );
}
