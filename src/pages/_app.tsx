import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'swiper/css/bundle'
import 'swiper/swiper-bundle.css';
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
    <main className={`${Gotham?.variable} ${frinkRio?.variable} ${dejavu?.variable} `}>
      <Component {...pageProps} />;
    </main>
  );
}
