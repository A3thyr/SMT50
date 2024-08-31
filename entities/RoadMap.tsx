import { cn } from "@/shared/lib/utils/cn";
import React from "react";
import VerifySvg from "@/public/verify.svg";
import RefreshSvg from "@/public/refresh-square-2.svg";
import TimerSvg from "@/public/timer.svg";

export default function RoadMap() {
  return (
    <div className="z-[999] flex flex-col items-center pt-[100px] min-[1440px]:w-full min-[1440px]:items-start">
      <h2 className="bg-text-pink-radgrad bg-clip-text text-center font-manrope text-[30px] font-medium leading-[36px] text-transparent min-[1440px]:text-[50px] min-[1440px]:leading-[60px]">
        Roadmap
      </h2>
      <div className="flex flex-col gap-[20px] pt-[40px] min-[1440px]:w-full">
        <div className="relative flex flex-col items-center min-[1440px]:w-full">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#FF00A8] min-[1440px]:w-[498px]"></div>
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[22px] pt-[30px] text-center backdrop-blur-[25px] min-[1440px]:w-full min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:gap-[50px] min-[1440px]:px-[70px] min-[1440px]:pb-[54px] min-[1440px]:pt-[50px]">
            <h3
              className={cn(
                "font text-[50px] font-extrabold leading-[60px] text-transparent min-[1440px]:text-nowrap min-[1440px]:pr-[72px] min-[1440px]:text-[80px] min-[1440px]:leading-[96px]",
                "h3StrokePink",
              )}
            >
              Q4 2024
            </h3>
            <div className="mt-[30px] flex w-[336px] flex-col items-center gap-[10px] font-montserrat min-[1440px]:mt-[0px] min-[1440px]:w-fit min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:gap-[20px]">
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-solid border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <VerifySvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Sale of keys
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-solid border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <VerifySvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  First stage of marketing
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-solid border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <VerifySvg />
                <h4 className="text-[13px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  $SMT50 Farming for index key holders
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-solid border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <VerifySvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Development of index
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <RefreshSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Launch of the Index
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center min-[1440px]:w-full">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#8D23F7] min-[1440px]:w-[498px]"></div>
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[22px] pt-[30px] text-center backdrop-blur-[25px] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:gap-[50px] min-[1440px]:px-[70px] min-[1440px]:pb-[54px] min-[1440px]:pt-[50px]">
            <h3
              className={cn(
                "text-[50px] font-extrabold leading-[60px] text-transparent min-[1440px]:text-nowrap min-[1440px]:pr-[85px] min-[1440px]:text-[80px] min-[1440px]:leading-[96px]",
                "h3StrokePurple",
              )}
            >
              Q1 2025
            </h3>
            <div className="mt-[30px] flex w-[336px] flex-col items-center gap-[10px] font-montserrat min-[1440px]:mt-[0px] min-[1440px]:w-fit min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:gap-[20px]">
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <RefreshSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Further development of the Index
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <RefreshSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Second stage of marketing
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-white px-[20px] py-[10px] min-[1440px]:w-fit">
                <RefreshSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Collaborations and partnerships
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-[#FFFFFF66] px-[20px] py-[10px] min-[1440px]:w-fit">
                <TimerSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Airdrops to the index key holders
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center min-[1440px]:w-full">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#0047FF] min-[1440px]:w-[498px]"></div>
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[22px] pt-[30px] text-center backdrop-blur-[25px] min-[1440px]:w-full min-[1440px]:flex-row min-[1440px]:justify-start min-[1440px]:gap-[50px] min-[1440px]:px-[70px] min-[1440px]:pb-[54px] min-[1440px]:pt-[50px]">
            <h3
              className={cn(
                "text-[50px] font-extrabold leading-[60px] text-transparent min-[1440px]:text-nowrap min-[1440px]:pr-[75px] min-[1440px]:text-[80px] min-[1440px]:leading-[96px]",
                "h3StrokeBlue",
              )}
            >
              Q2 2025
            </h3>
            <div className="mt-[30px] flex w-[336px] flex-col items-center gap-[10px] font-montserrat min-[1440px]:mt-[0px] min-[1440px]:w-fit min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:gap-[20px]">
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-[#FFFFFF66] px-[20px] py-[10px] min-[1440px]:w-fit">
                <TimerSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  Further development of the Index
                </h4>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-[10px] rounded-[50px] border-[1px] border-dashed border-[#FFFFFF66] px-[20px] py-[10px] min-[1440px]:w-fit">
                <TimerSvg />
                <h4 className="text-[15px] font-normal leading-[18px] text-white min-[1440px]:text-[20px] min-[1440px]:leading-[24px]">
                  TBA
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
