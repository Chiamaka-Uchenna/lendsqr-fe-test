
import { Inter } from 'next/font/google';
import { Work_Sans } from "next/font/google";
import { Roboto } from 'next/font/google';
import localFont from "next/font/local";


export const inter = Inter({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-inter', 
});


export const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"], // Include Latin subset for broader character support
  display: "swap", // Optional: fallback text rendering behavior
});


export const roboto = Roboto({
  weight: "400",
  subsets:["latin"],
});



export const sfCompactText = localFont({
  src: [
    {
      path: "../fonts/SFCompactText-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sf-compact-text",
});
