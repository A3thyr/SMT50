"use client";

import React, { useState } from "react";
import MedalStarMobile from "@/public/medal-star-mobile.svg";
import MedalSvg from "@/public/medal-star.svg";
import PeopleSvg from "@/public/people.svg";
import BankSvg from "@/public/bank.svg";
import ChartDeskSvg from "@/public/presention-chart.svg";
import CryptoSvg from "@/public/buy-crypto.svg";
import { cn } from "@/shared/lib/utils/cn";

const buttons = [
  {
    text: "Community-Driven Index Adjustments",
  },
  {
    text: "Efficiency with Solana Blockchain",
  },
  {
    text: "Market Relevance",
  },
  {
    text: "Real-Time Index Tracking and Analytics",
  },
  {
    text: "Focus on Meme Coins",
  },
];

const cards = [
  {
    icon: <MedalSvg />,
    color: "#8D23F7",
    title: "Efficiency with Solana Blockchain",
    description:
      "The use of the Solana blockchain provides SMT50 with fast speed and low transaction costs, making it more efficient than indexes on other blockchains. Moreover, Solana stands out as one of the most promising blockchains for several reasons: High throughput and low transaction costs. Robust and scalable infrastructure. Active and growing developer community. Because of these factors, the index's growth will be closely tied to Solana's growth. Thus, investing in the index not only benefits from the rise of memes but also from Solana's overall growth. In any case, this ensures a winning scenario for stakeholders.",
  },
  {
    icon: <PeopleSvg />,
    color: "#FF00A8",
    title: "Community-Driven Index Adjustments",
    description:
      "SMT50 incorporates a unique community voting system where token holders can propose and vote on which meme coins should be added or removed from the index. This democratic approach ensures that the index is always aligned with the interests and insights of our vibrant community.",
  },
  {
    icon: <BankSvg />,
    color: "#0047FF",
    title: "Market Relevance",
    description:
      "We are not limited by any fixed rules or deadlines. This flexibility allows us to add tokens to the index at any given moment, with a maximum amount of them being 50.. Consequently, regular updates will always function at their full capacity, ensuring that the index remains perpetually current. This adaptability aligns perfectly with the community-driven index adjustments mentioned earlier, ensuring a highly relevant and responsive index.",
  },
  {
    icon: <ChartDeskSvg />,
    color: "#5D4391",
    title: "Real Time Index Tracking and Analytics",
    description:
      "Our platform offers real-time tracking and detailed analytics of the index performance. Investors can access comprehensive data visualizations, historical performance charts, and predictive analytics to make informed investment decisions. This transparency and data-driven insight provide a significant edge in the rapidly changing crypto market.",
  },
  {
    icon: <CryptoSvg />,
    color: "#00FFD1",
    title: "Focus on Meme Coins",
    description:
      "SMT50 stands out in the crowded crypto space due to its focus on meme coins, a niche yet rapidly growing segment of the market. Meme coins have the opportunity to provide the fastest growing price on the market.",
  },
];

export default function Unique() {
  const [isSlide, setIsSlide] = useState(0);

  return (
    <div className="flex flex-col items-center gap-[40px] pt-[100px] font-montserrat min-[1440px]:items-start min-[1440px]:gap-[50px] min-[1440px]:pt-[250px]">
      <h2 className="bg-text-bluenwhite-radgrad bg-clip-text text-center font-manrope text-[30px] font-medium leading-[36px] text-transparent min-[1440px]:text-start min-[1440px]:text-[50px] min-[1440px]:leading-[60px]">
        What makes the SMT50 unique
      </h2>
      <div className="flex flex-col items-center gap-[20px] rounded-[20px] bg-black p-[20px] min-[1440px]:h-fit min-[1440px]:w-full min-[1440px]:flex-row min-[1440px]:p-[50px]">
        <div className="flex flex-col gap-[5px] min-[1440px]:w-[41%]">
          {buttons.map((button, index) => (
            <button
              key={`buttons-${index}`}
              onClick={() => setIsSlide(index)}
              className="rounded-[10px] border-[1px] border-transparent bg-[#110C15] px-[30px] py-[15px] text-start text-[15px] font-normal leading-[18px] text-white hover:border-[1px] hover:border-dashed hover:border-[#8D23F7] focus:border-[1px] focus:border-dashed focus:border-[#fff] min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]"
            >
              {button.text}
            </button>
          ))}
        </div>
        {cards.map((card, index) => (
          <div
            key={`card-unique-${index}`}
            className={cn(
              "relative flex flex-col gap-[10px] rounded-[15px] bg-[#110C15] px-[20px] pb-[20px] pt-[15px] min-[1440px]:w-[64.5%] min-[1440px]:gap-[20px] min-[1440px]:px-[60px] min-[1440px]:pb-[26.5px] min-[1440px]:pt-[36.5px]",
              index === isSlide ? "" : "hidden",
            )}
          >
            <div
              className={`absolute right-0 top-0 h-[60px] w-[60px] rounded-bl-[800px] rounded-tr-[200px] min-[1440px]:size-[100px] ${index === 3 && "bg-[#00A3FF]"} bg-[${card.color}]`}
            >
              <div className="absolute right-0 min-[1024px]:pr-[11px] min-[1024px]:pt-[11px]">
                {card.icon}
              </div>
            </div>
            <h3
              className={`text-[24px] font-medium leading-[28.8px] ${index === 3 && "text-[#00A3FF]"} text-[${card.color}] min-[1440px]:text-[35px] min-[1440px]:leading-[42px]`}
            >
              {card.title}
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-[#FFFFFFCC] min-[1440px]:text-[18px] min-[1440px]:leading-[27px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
