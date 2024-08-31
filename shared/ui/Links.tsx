import Link from "next/link";
import React from "react";
import DiscIconDuplic from "@/public/discicondupl.svg";
import TgIconDuplic from "@/public/telegramicondupl.svg";
import TwitterIconDuplic from "@/public/xicondupl.svg";

export const Links = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <Link
        href={"/"}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15] transition hover:bg-[#1B1322] active:bg-standBtnGrad"
      >
        <TgIconDuplic />
      </Link>
      <Link
        href={"/"}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15] transition hover:bg-[#1B1322] active:bg-standBtnGrad"
      >
        <DiscIconDuplic />
      </Link>

      <Link
        href={"/"}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15] transition hover:bg-[#1B1322] active:bg-standBtnGrad"
      >
        <TwitterIconDuplic />
      </Link>
    </div>
  );
};
