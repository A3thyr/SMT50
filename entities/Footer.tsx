import React from "react";
import logo from "@/public/photo_2024-06-20_00-41-04-Photoroom 1.png";
import Image from "next/image";
import Link from "next/link";
import TgIconDefFoot from "@/public/tgicondef.svg";
import DiscIconDefFoot from "@/public/discicondef.svg";
import TwitterIconDefFoot from "@/public/twittericondef.svg";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-[20px] pb-[100px] pt-[50px] min-[1440px]:pt-[250px]">
      <div className="shadow-footerShadows flex w-full flex-col items-center justify-center gap-[25px] rounded-[20px] bg-black pb-[20px] pt-[15px] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:px-[50px]">
        <Image src={logo} alt="logo" />
        <div className="flex flex-col items-center gap-[22px] text-white min-[1440px]:flex-row min-[1440px]:gap-[60px] min-[1440px]:pr-[100px]">
          <span className="text-[24px] font-bold leading-[31.2px]">JOIN THE COMMUNITY</span>
          <span className="text-[18px] font-medium leading-[16px] min-[1440px]:text-[20px]">
            Get ready to level up with SMT50
          </span>
        </div>
        <div className="flex flex-row items-center gap-[10px]">
          <Link
            href={""}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#191619] transition hover:bg-[#1B1322]"
          >
            <TgIconDefFoot />
          </Link>
          <Link
            href={""}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#191619] transition hover:bg-[#1B1322]"
          >
            <DiscIconDefFoot />
          </Link>
          <Link
            href={""}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#191619] transition hover:bg-[#1B1322]"
          >
            <TwitterIconDefFoot />
          </Link>
        </div>
      </div>
      <span className="text-[14px] font-normal leading-[17.07px] text-[#FFFFFF66]">
        ©2024 SMT50. ALL RIGHTS RESERVED
      </span>
    </footer>
  );
}
