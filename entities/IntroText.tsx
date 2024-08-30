import Image from "next/image";
import React from "react";
import memecoinMobile from "@/public/memecoinMobile.png";
import CirclePngDesk from "@/public/circleimgdesktop.png";
import MemeCoinDesk from "@/public/MemeCoinsDesk.png";

export default function IntroText() {
  return (
    <div className="flex flex-col items-center pt-[50px] min-[1440px]:items-start min-[1440px]:pt-[130px]">
      <div className="z-[2] flex flex-col gap-[15px] min-[1440px]:w-[47%] min-[1440px]:items-start min-[1440px]:gap-[30px]">
        <p className="bg-text-bluenwhite-radgrad bg-clip-text text-center text-[35px] font-medium leading-[42px] text-transparent min-[1440px]:text-start min-[1440px]:text-[75px] min-[1440px]:leading-[90px]">
          Invest in a diversified portfolio of SMT50 memecoins easily
        </p>
        <p className="text-center text-[15px] font-normal leading-[22.5px] text-white min-[1440px]:text-start min-[1440px]:text-[24px] min-[1440px]:leading-[36px]">
          The index is regularly updated, ensuring that it always represents the most relevant and
          popular meme coins
        </p>
      </div>
      <div className="flex flex-row gap-[10px] pt-[30px] min-[1440px]:w-[39%] min-[1440px]:gap-[20px] min-[1440px]:pt-[50px]">
        <button className="rounded-[100px] bg-standBtnGrad px-[28px] py-[18px] text-center text-[18px] font-semibold leading-[24px] text-white min-[1440px]:w-[61%]">
          Mint Index Key
        </button>
        <button className="rounded-[100px] border-[1px] border-white bg-transparent px-[48.5px] py-[18px] text-center text-[18px] font-semibold leading-[24px] text-white min-[1440px]:w-[39%]">
          Read More
        </button>
      </div>
      <Image
        src={memecoinMobile}
        alt="memecoin"
        className="right-0 mt-[50px] block max-w-none overflow-hidden min-[1440px]:hidden"
      />
      <Image
        src={CirclePngDesk}
        alt="circlepngdesk"
        className="absolute right-0 hidden min-[1440px]:block"
      />
      <Image
        src={MemeCoinDesk}
        alt="memecoinsdesk"
        className="absolute right-[63px] top-[112px] hidden min-[1440px]:block"
      />
    </div>
  );
}
