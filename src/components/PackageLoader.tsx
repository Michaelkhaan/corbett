import React from "react";

export default function PackageLoader() {
  return (
    <div className="w-full mt-4">
      <div className="w-full lg:h-32 animate-pulse bg-slate-200" />
      <div className="mt-2 h-3 animate-pulse bg-slate-200" />
      <div className="animate-pulse h-2 w-1/2 bg-slate-200 mt-1" />
      <div className="animate-pulse h-2 w-1/3  bg-slate-200 mt-1 " />
      <div className="animate-pulse h-1 w-1/4 bg-slate-200 mt-1 " />
    </div>
  );
}
