import Image from "next/image";
import React from "react";
import memecoinMobile from "@/public/memecoinMobile.png";
import CirclePngDesk from "@/public/circleimgdesktop.png";
import MemeCoinDesk from "@/public/MemeCoinsDesk.png";
import { cn } from "@/shared/lib/utils/cn";

export default function IntroText() {
  return (
    <div className="flex flex-col items-center pt-[50px] font-montserrat min-[1280px]:items-start min-[1280px]:pt-[130px]">
      <div className="z-[2] flex flex-col gap-[15px] min-[1280px]:w-[70%] min-[1280px]:items-start min-[1440px]:w-[65%] min-[1440px]:gap-[30px] min-[1750px]:w-[47%]">
        <p className="bg-text-bluenwhite-radgrad bg-clip-text text-center font-manrope text-[35px] font-medium leading-[42px] text-transparent min-[1280px]:text-start min-[1280px]:text-[75px] min-[1280px]:leading-[90px]">
          Invest in a diversified portfolio of SMT50 memecoins easily
        </p>
        <p className="text-center text-[15px] font-normal leading-[22.5px] text-white min-[1280px]:text-start min-[1280px]:text-[24px] min-[1280px]:leading-[36px]">
          The index is regularly updated, ensuring that it always represents the most relevant and
          popular meme coins
        </p>
      </div>
      <div className="z-[10] flex flex-row gap-[10px] pt-[30px] min-[1280px]:w-[55%] min-[1280px]:gap-[20px] min-[1280px]:pt-[50px] min-[1440px]:w-[50%] min-[1750px]:w-[39%]">
        <button className="rounded-[100px] bg-standBtnGrad px-[28px] py-[18px] text-center text-[18px] font-semibold leading-[24px] text-white transition-all hover:shadow-buttonHoverShadow active:bg-activeButtonGrad active:shadow-none min-[1280px]:w-[55%] min-[1440px]:w-[61%]">
          Mint Index Key
        </button>
        <button
          className={cn(
            "relative flex items-center justify-center rounded-[100px] border-[1px] border-solid bg-transparent px-[44.5px] py-[18px] text-center text-[18px] font-semibold leading-[24px] text-white transition-all hover:border-[1px] hover:border-solid hover:border-[#1766b0] hover:bg-hoverGradient hover:bg-clip-text hover:text-transparent active:border-transparent active:bg-standBtnGrad active:bg-clip-border active:text-white min-[1280px]:w-[41%] min-[1440px]:w-[39%]",
            "btnBorderGrad",
          )}
        >
          Read More
        </button>
      </div>
      <Image
        src={memecoinMobile}
        alt="memecoin"
        className="absolute right-0 top-[488px] block max-w-none overflow-hidden min-[1024px]:hidden"
      />
      <Image
        src={CirclePngDesk}
        alt="circlepngdesk"
        className="absolute right-0 hidden min-[1024px]:block min-[1280px]:top-[350px] min-[1750px]:top-auto"
      />
      <Image
        src={MemeCoinDesk}
        alt="memecoinsdesk"
        className="absolute right-[63px] hidden min-[1024px]:block min-[1280px]:top-[212px] min-[1750px]:top-[112px]"
      />
    </div>
  );
}
