import React, { useState } from "react";
import Itinerary from "./Itinerary";

export default function ItenararyList({ data }: any) {
  const [openId, setOpenId] = useState<string | null>("0");
  return (
    <div className="2xl:px-10 mt-5">
      <h1 className="lg:text-lg text-sm 2xl:text-[21px] font-GothamBook font-bold leading-8">
        Itinerary (Day Wise)
      </h1>
      <div className="w-full lg:w-1/2 2xl:w-full mt-3">
        {data?.map((e: any, index: any) => (
          <Itinerary
            key={index?.toString()}
            openId={openId}
            setOpenId={setOpenId as any}
            className="mb-1"
            index={index?.toString()}
            days={e?.name || ""}
            title={e?.title}
            desc={e?.description || ""}
            paraClass="lg:w-[450px] xl:w-[600px]"
          />
        ))}
      </div>
    </div>
  );
}
