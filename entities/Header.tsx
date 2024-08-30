import React from "react";
import Image from "next/image";
import logo from "@/public/photo_2024-06-20_00-41-04-Photoroom 1.png";
import BurgerMenu from "@/public/BurgerMenu.svg";
import Link from "next/link";
import LinkArrow from "@/public/LinkArrow.svg";
import TgIconDef from "@/public/tgicondef.svg";
import DiscIconDef from "@/public/discicondef.svg";
import TwitterIconDef from "@/public/twittericondef.svg";

export default function Header() {
  return (
    <header className="top-0 flex w-full flex-row items-center justify-between gap-[15px] rounded-2xl bg-black px-[20px] py-[15px] min-[425px]:gap-[41px] min-[1440px]:px-[59px]">
      <Image src={logo} alt="logo" />
      <div className="flex items-center gap-[28px]">
        <div className="item-center flex gap-[60px] pr-[39px]">
          <Link
            href={""}
            className="text-[20px] font-medium leading-[16px] text-white"
            target="_blank"
          >
            Docs
          </Link>
          <Link
            href={""}
            className="text-[20px] font-medium leading-[16px] text-white"
            target="_blank"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-[10px]">
          <Link
            href={""}
            target="_blank"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15]"
          >
            <TgIconDef />
          </Link>
          <Link
            href={""}
            target="_blank"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15]"
          >
            <DiscIconDef />
          </Link>
          <Link
            href={""}
            target="_blank"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#110C15]"
          >
            <TwitterIconDef />
          </Link>
        </div>
        <Link
          href="/wallet"
          className="flex items-center gap-[30px] rounded-[100px] border-[1px] border-white px-[20px] py-[10px] min-[1024px]:px-[30px] min-[1024px]:py-[18px]"
        >
          <span className="text-[18px] font-medium leading-7 text-white min-[1024px]:leading-[18px]">
            Mint Index Key
          </span>
          <LinkArrow />
        </Link>
        <div className="flex min-[1024px]:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
