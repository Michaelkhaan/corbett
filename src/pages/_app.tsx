import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cards";
import localFont from "next/font/local";

const Gotham = localFont({
  src: [
    {
      path: "../../public/fonts/gotham/GothamBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/gotham/GothamLight.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/gotham/GothamMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/gotham/GothamBook.ttf",
      weight: "600",
      style: "semibold",
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
const dejavu = localFont({
  src: [
    {
      path: "../../public/fonts/gotham/dejavu-sans.woff",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--dejavu",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Gotham?.variable} ${frinkRio?.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
