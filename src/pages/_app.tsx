import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import localFont from "next/font/local";

const Gotham = localFont({
  src: [
    {
      path: "../../public/fonts/gotham/GothamBold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--Gotham",
});

const frinkRio = localFont({
  src: [
    {
      path: "../../public/fonts/frink-rio/Fontspring-DEMO-frinkrio-extrabold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--frinkRio",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Gotham?.variable} ${frinkRio?.variable} `}>
      <Component {...pageProps} />;
    </main>
  );
}
