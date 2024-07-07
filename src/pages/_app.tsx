import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cards";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

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
      path: "../../public/fonts/gotham/Gotham-Light.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/gotham/Gotham-XLight.otf",
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
    {
      path: "../../public/fonts/frink-rio/Fontspring-DEMO-frinkrio-regular.ttf",
      weight: "400",
      style: "nurmal",
    },
  ],
  variable: "--frinkRio",
});
// const dejavu = localFont({
//   src: [
//     {
//       path: "../../public/fonts/gotham/dejavu-sans.woff",
//       weight: "800",
//       style: "bold",
//     },
//   ],
//   variable: "--dejavu",
// });
const myriadPro = localFont({
  src: [
    {
      path: "../../public/fonts/myriad-pro/MYRIADPRO-SEMIBOLD.woff",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--myriadPro",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${Gotham?.variable} ${frinkRio?.variable} ${myriadPro?.variable} `}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
