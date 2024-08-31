"use client";

import BurgerMenu from "@/public/BurgerMenu.svg";
import LinkArrow from "@/public/LinkArrow.svg";
import logo from "@/public/photo_2024-06-20_00-41-04-Photoroom 1.png";
import { cn } from "@/shared/lib/utils/cn";
import { Links } from "@/shared/ui/Links";
import { BurgerSlide } from "@/widgets/BurgerSlide";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [setActive, setIsActive] = useState(false);

  const handleClick = () => {
    setActive === false ? setIsActive(true) : setIsActive(false);
  };

  return (
    <header className="font-montserrat relative top-0 flex w-full flex-row items-center justify-between gap-[15px] rounded-2xl bg-black px-[20px] py-[15px] min-[425px]:gap-[41px] min-[1440px]:px-[59px]">
      <BurgerSlide isOpen={setActive} />
      <Link href={`/`}>
        <Image src={logo} alt="logo" className="z-[999]" />
      </Link>
      <div
        onClick={handleClick}
        className={cn("fixed inset-0 z-[1] bg-[#00000080]", setActive === false && "hidden")}
      />
      <div className="z-[999] flex items-center min-[1024px]:gap-[28px]">
        <div className="hidden flex-col items-center gap-[60px] pr-[39px] min-[1024px]:flex min-[1440px]:flex-row">
          <div className="hidden flex-col items-center min-[1024px]:flex min-[1024px]:flex-row min-[1024px]:gap-[60px]">
            <Link
              href={""}
              className={cn(
                "hover:bg-hoverGradient text-[20px] font-medium leading-[16px] text-white transition-all hover:bg-clip-text hover:text-transparent",
                "textShadow",
              )}
              // target="_blank"
            >
              Docs
            </Link>
            <Link
              href={""}
              className={cn(
                "hover:bg-hoverGradient text-[20px] font-medium leading-[16px] text-white transition-all hover:bg-clip-text hover:text-transparent",
                "textShadow",
              )}
              // target="_blank"
            >
              Contact
            </Link>
            <div className="hidden min-[1024px]:block">
              <Links />
            </div>
          </div>
        </div>
        <Link
          href="/"
          id="arrowsvg"
          className="flex items-center rounded-[100px] border-[1px] border-solid border-white bg-transparent p-[2px] text-[18px] font-medium leading-7 text-white transition-all hover:border-[#1766b0] hover:bg-standBtnGrad hover:bg-clip-text hover:text-transparent active:border-transparent active:bg-standBtnGrad active:bg-clip-border active:text-white"
        >
          <span className="flex w-full flex-row items-center gap-[20px] rounded-[100px] bg-transparent px-[20px] py-[10px] min-[1024px]:px-[30px] min-[1024px]:py-[18px] min-[1024px]:leading-[18px]">
            Mint Index Key
            <LinkArrow />
          </span>
        </Link>
        <button onClick={handleClick} className={cn("flex pl-[30px] min-[1024px]:hidden")}>
          <BurgerMenu className={cn(setActive === true && "rotate-90 transition-transform")} />
        </button>
      </div>
    </header>
  );
}
