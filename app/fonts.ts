import localFont from "next/font/local";

export const fontBasic = localFont({
  src: "../public/fonts/Times New Normal Regular.ttf",

  display: "swap",
  variable: "--font-normal", // This creates the CSS variable for Tailwind.
});

export const fontMystery = localFont({
  // We tell the tool the location of the second font file.
  src: "../public/fonts/Bates Shower.ttf",

  display: "swap",
  variable: "--font-batesShower",
});
