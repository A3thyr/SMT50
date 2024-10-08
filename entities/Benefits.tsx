import Image from "next/image";
import React from "react";
import keyMobile from "@/public/key-mobile.png";
import keyDesktop from "@/public/keydesktop.png";
import PinkLineDesktop from "@/public/pinkroundline.svg";
import PurpleLineDesktop from "@/public/purpleline.svg";
import BlueLineDesktop from "@/public/blueline.svg";
import AquaLineDesktop from "@/public/aqualine.svg";
import PinkLineMobile from "@/public/pinklinemobile.svg";
import PurpleLineMobile from "@/public/purplelinemobile.svg";
import BlueLineMobile from "@/public/bluelinemobile.svg";
import AquaLineMobile from "@/public/aqualinemobile.svg";

export default function Benefits() {
  return (
    <div className="relative flex flex-col items-center pt-[100px] font-montserrat min-[1280px]:w-full min-[1280px]:pt-[250px]">
      <h2 className="bg-text-pink-radgrad bg-clip-text text-center font-manrope text-[30px] font-medium leading-[36px] text-transparent min-[1280px]:text-[50px] min-[1280px]:leading-[60px]">
        Benefits for Index Key Holders
      </h2>
      <div className="flex flex-col items-center pt-[40px] min-[1280px]:w-full min-[1280px]:flex-row min-[1280px]:justify-between min-[1280px]:pt-[110px]">
        <div className="relative flex flex-col items-center">
          <PinkLineDesktop className="absolute hidden min-[1280px]:block" />
          <PinkLineMobile className="absolute block min-[1280px]:hidden" />
          <div className="mt-[5px] flex h-[300px] w-[300px] flex-col items-center justify-center gap-[10px] rounded-[50%] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] py-[87px] text-center backdrop-blur-[25px] min-[1280px]:size-[369px] min-[1280px]:px-[40px] min-[1280px]:py-[85.5px]">
            <h3 className="text-[18px] font-semibold leading-[23.4px] text-[#FF00A8] min-[1280px]:text-[24px] min-[1280px]:leading-[31.2px]">
              $SMT50 tokens distribution among Index Key holders
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1280px]:text-[16px] min-[1280px]:leading-[24px]">
              A fixed amount of $SMT50 tokens will be distributed to key holders for each key they
              own
            </p>
          </div>
        </div>
        <div className="relative mt-[-48px] flex flex-col items-center min-[1280px]:absolute min-[1280px]:left-[199px] min-[1280px]:top-[854px] min-[1440px]:left-[259px]">
          <PurpleLineDesktop className="absolute hidden min-[1280px]:block" />
          <PurpleLineMobile className="absolute block min-[1280px]:hidden" />
          <div className="mt-[5px] flex h-[300px] w-[300px] flex-col items-center justify-center gap-[10px] rounded-[50%] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] py-[87px] text-center backdrop-blur-[25px] min-[1280px]:size-[369px] min-[1280px]:px-[40px] min-[1280px]:py-[85.5px]">
            <h3 className="text-[18px] font-semibold leading-[23.4px] text-[#8D23F7] min-[1280px]:text-[24px] min-[1280px]:leading-[31.2px]">
              Participation in the decision-making process for the further development of the Index
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1280px]:text-[16px] min-[1280px]:leading-[24px]">
              Future participation in voting on new meme coins to be added to the index
            </p>
          </div>
        </div>
        <div className="relative mt-[-50px] flex flex-col items-center min-[1280px]:absolute min-[1280px]:right-[199px] min-[1280px]:top-[854px] min-[1440px]:right-[259px]">
          <BlueLineDesktop className="absolute hidden min-[1280px]:block" />
          <BlueLineMobile className="absolute block min-[1280px]:hidden" />
          <div className="mt-[5px] flex h-[300px] w-[300px] flex-col items-center justify-center gap-[10px] rounded-[50%] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] py-[87px] text-center backdrop-blur-[25px] min-[1280px]:size-[369px] min-[1280px]:px-[40px] min-[1280px]:py-[85.5px]">
            <h3 className="text-[18px] font-semibold leading-[23.4px] text-[#0047FF] min-[1280px]:text-[24px] min-[1280px]:leading-[31.2px]">
              Farming of the $SMT50 tokens
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1280px]:text-[16px] min-[1280px]:leading-[24px]">
              Farming of the $SMT50 tokens for early birds starts 10 days after the first index key
              is minted. The duration of the farming is 2 month
            </p>
          </div>
        </div>
        <div className="relative mt-[-55px] flex flex-col items-center min-[1280px]:mt-[0px]">
          <AquaLineDesktop className="absolute hidden min-[1280px]:block" />
          <AquaLineMobile className="absolute block min-[1280px]:hidden" />
          <div className="mt-[5px] flex h-[300px] w-[300px] flex-col items-center justify-center gap-[10px] rounded-[50%] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] py-[87px] text-center backdrop-blur-[25px] min-[1280px]:size-[369px] min-[1280px]:px-[40px] min-[1280px]:py-[85.5px]">
            <h3 className="text-[18px] font-semibold leading-[23.4px] text-[#00FFD1] min-[1280px]:text-[24px] min-[1280px]:leading-[31.2px]">
              Airdrops and more Benefits
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1280px]:text-[16px] min-[1280px]:leading-[24px]">
              Various airdrops to Index Key holders
            </p>
          </div>
        </div>
      </div>
      <div className="relative top-0 mt-[40px] flex w-full flex-col items-center overflow-hidden rounded-[30px] bg-black pb-[60px] pt-[30px] min-[1280px]:absolute min-[1280px]:top-[360px] min-[1280px]:mt-[0px] min-[1280px]:w-[408px] min-[1440px]:w-[498px]">
        <Image src={keyMobile} alt="keymobile" className="z-[10] block min-[1280px]:hidden" />
        <Image src={keyDesktop} alt="keydesktop" className="z-[10] hidden min-[1280px]:block" />
        <div className="absolute top-0 mt-[143px] h-[277px] w-[277px] rounded-[50%] bg-keyCardConic opacity-80 blur-[50px] min-[1280px]:h-[400px] min-[1280px]:w-[400px]" />
      </div>
      <button className="z-[11] mt-[-30px] rounded-[100px] bg-standBtnGrad px-[79.5px] py-[18px] text-center text-[18px] font-semibold leading-[24px] text-white transition-all hover:shadow-buttonHoverShadow active:bg-activeButtonGrad active:shadow-none min-[1280px]:absolute min-[1280px]:top-[748px] min-[1280px]:px-[52px] min-[1280px]:text-[20px]">
        Mint Index Key
      </button>
    </div>
  );
}
