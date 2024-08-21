import React, { useState } from "react";
import Faq from "./PackageFAQ";

export default function FaqList({ data }: any) {
  console.log(data, "test");
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="w-full mx-auto mt-14 2xl:px-6">
      <h1 className="text-xl font-Gotham font-bold lg:px-5">
        FAQ Regarding Corbett Saffari!
      </h1>
      {data?.map((e: any, index: number) => (
        <Faq
          openId={openId}
          setOpenId={setOpenId as any}
          id={e?.id}
          key={index?.toString()}
          question={e?.title || e?.question || ""}
          answer={e?.description || e?.answer || ""}
        />
      ))}
    </div>
  );
}