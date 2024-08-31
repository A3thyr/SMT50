import { cn } from "@/shared/lib/utils/cn";
import { Links } from "@/shared/ui/Links";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";

type BurgerSlideProps = {
  isOpen?: boolean;
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -450 },
};

export const BurgerSlide: FC<BurgerSlideProps> = (props) => {
  return (
    <motion.div
      initial="hidden"
      animate={props.isOpen === true ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.2 }}
      className="absolute left-[0px] top-[80px] z-[998] flex w-full flex-col items-center gap-[60px] rounded-b-[16px] bg-black py-[60px]"
    >
      <div className="font-montserrat flex flex-col items-center gap-[50px]">
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
      </div>
      <Links />
    </motion.div>
  );
};
