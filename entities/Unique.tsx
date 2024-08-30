"use client";

import React from "react";
import MedalStarMobile from "@/public/medal-star-mobile.svg";

export default function Unique() {
  const handleClick = () => {};
  return (
    <div className="flex flex-col items-center gap-[40px] pt-[100px] min-[1440px]:items-start min-[1440px]:gap-[50px] min-[1440px]:pt-[250px]">
      <h2 className="bg-text-bluenwhite-radgrad bg-clip-text text-center text-[30px] font-medium leading-[36px] text-transparent min-[1440px]:text-start min-[1440px]:text-[50px] min-[1440px]:leading-[60px]">
        What makes the SMT50 unique
      </h2>
      <div className="flex flex-col items-center gap-[20px] rounded-[20px] bg-black p-[20px] min-[1440px]:h-fit min-[1440px]:flex-row min-[1440px]:p-[50px]">
        <div className="flex flex-col gap-[5px] min-[1440px]:w-[34%]">
          <button
            onClick={handleClick}
            className="rounded-[10px] bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]"
          >
            Community-Driven Index Adjustments
          </button>
          <button className="rounded-[10px] bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]">
            Efficiency with Solana Blockchain
          </button>
          <button className="rounded-[10px] bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]">
            Market Relevance
          </button>
          <button className="rounded-[10px] bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]">
            Real-Time Index Tracking and Analytics
          </button>
          <button className="rounded-[10px] bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]">
            Focus on Meme Coins
          </button>
        </div>
        <div className="min relative flex flex-col gap-[10px] rounded-[15px] bg-[#110C15] px-[20px] pb-[20px] pt-[15px] min-[1440px]:h-full min-[1440px]:w-[64.5%] min-[1440px]:gap-[20px] min-[1440px]:px-[60px] min-[1440px]:pb-[26.5px] min-[1440px]:pt-[36.5px]">
          <div className="absolute right-0 top-0 h-[60px] w-[60px] rounded-bl-[800px] rounded-tr-[200px] bg-[#8D23F7]">
            <div className="absolute right-0 pr-[11px] pt-[11px]">
              <MedalStarMobile />
            </div>
          </div>
          <h3 className="text-[24px] font-medium leading-[28.8px] text-[#8D23F7] min-[1440px]:text-[35px] min-[1440px]:leading-[42px]">
            Efficiency with Solana Blockchain
          </h3>
          <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1440px]:text-[18px] min-[1440px]:leading-[27px]">
            The use of the Solana blockchain provides SMT50 with fast speed and low transaction
            costs, making it more efficient than indexes on other blockchains. Moreover, Solana
            stands out as one of the most promising blockchains for several reasons: High throughput
            and low transaction costs. Robust and scalable infrastructure. Active and growing
            developer community. Because of these factors, the index&#39;s growth will be closely
            tied to Solana&#39;s growth. Thus, investing in the index not only benefits from the
            rise of memes but also from Solana&#39;s overall growth. In any case, this ensures a
            winning scenario for stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}
