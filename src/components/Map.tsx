import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface Props {
  address: string; // The address to geocode.
}

function Map({ address }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader
      .load()
      .then(() => {
        if (typeof google !== "undefined") {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              if (mapRef.current) {
                const map = new google.maps.Map(mapRef.current, {
                  center: results[0].geometry.location,
                  zoom: 8,
                });
                new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location,
                });
              }
            } else {
              console.error(
                `Geocode was not successful for the following reason: ${status}`
              );
            }
          });
        } else {
          console.error("Google Maps API failed to load");
        }
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
  }, [address]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default Map;
