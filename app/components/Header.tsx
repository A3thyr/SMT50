import React from "react";
import Image from "next/image";
import logo from "../../public/photo_2024-06-20_00-41-04-Photoroom 1.png";

export default function Header() {
  return (
    <header className="flex max-w-[25rem] items-center justify-between rounded-2xl bg-black px-[20px] py-[15px]">
      <Image src={logo} alt="logo" />
    </header>
  );
}
