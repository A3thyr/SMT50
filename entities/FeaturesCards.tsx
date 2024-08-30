import Image from "next/image";
import TrendLogo from "@/public/trend-up.svg";
import ShieldLogo from "@/public/shield.svg";
import CardCoinLogo from "@/public/card-coin.svg";
import LockLogo from "@/public/unlock.svg";
import ElemLogo from "@/public/element-plus.svg";
import IguessGif from "@/public/shouldvebeengif.png";
import IguessGifDesktop from "@/public/tipogifDesktop.jpg";
import { cn } from "@/shared/lib/utils/cn";

const cards = [
  {
    title: "High Yield Potential",
    logo: <TrendLogo />,
    description:
      "By investing in the top-performing meme coins, SMT50 aims to deliver high yield potential. The index is regularly updated to include the most promising meme coins, maximizing the opportunities for growth and profit.",
  },
  {
    title: "Transparency and Security",
    logo: <ShieldLogo />,
    description:
      "SMT50 is built on the Solana blockchain, which ensures high levels of transparency and security. All transactions are recorded on the blockchain, providing investors with a clear and immutable record of their investments.",
  },
  {
    title: "Diversification",
    logo: <CardCoinLogo />,
    description:
      "Investing in SMT50 offers exposure to a wide range of meme coins, reducing the risk associated with investing in a single coin. This diversified approach helps to mitigate volatility and enhance the potential for steady returns.",
  },
  {
    title: "Easy Access",
    logo: <LockLogo />,
    description:
      "SMT50 simplifies the investment process, allowing users to invest in a diversified portfolio of meme coins with ease. Our platform is user-friendly and designed to cater to both novice and experienced investors.",
  },
  {
    title: "Regular Updates",
    logo: <ElemLogo />,
    description:
      "The index is regularly reviewed and updated to reflect the latest trends and developments in the meme coin market. This ensures that SMT50 remains relevant and continues to provide value to its investors.",
  },
];

export default function FeaturesCards() {
  return (
    <div className="flex flex-col items-center pt-[100px] min-[1440px]:items-start min-[1440px]:pt-[670px]">
      <h2 className="bg-text-bluenwhite-radgrad bg-clip-text text-center text-[30px] font-medium leading-[36px] text-transparent min-[1440px]:text-[50px] min-[1440px]:leading-[60px]">
        Main Features
      </h2>
      <div className="flex h-fit flex-col items-center min-[1440px]:flex-row min-[1440px]:gap-[20px] min-[1440px]:pt-[50px]">
        <div className="mt-[40px] flex flex-col items-center gap-[10px] min-[1440px]:mt-[0px] min-[1440px]:grid min-[1440px]:grid-flow-row min-[1440px]:grid-cols-6 min-[1440px]:place-content-stretch min-[1440px]:place-items-stretch min-[1440px]:content-stretch min-[1440px]:justify-stretch min-[1440px]:justify-items-stretch min-[1440px]:gap-[20px] min-[1440px]:rounded-[50px] min-[1440px]:bg-black min-[1440px]:p-[50px]">
          {cards.map((card, index) => (
            <div
              key={`features-card-${index}`}
              className={cn(
                "flex h-full flex-col gap-[10px] rounded-[20px] bg-black p-[20px] min-[1440px]:bg-[#110C15] min-[1440px]:px-[30px] min-[1440px]:py-[20px]",
                (index === 0 || index === 1) && "col-span-3",
                index !== 0 && index !== 1 && "col-span-2",
              )}
            >
              <div className="flex flex-row items-center gap-[15px]">
                {card.logo}
                <h4 className="text-[18px] font-normal leading-[21.6px] text-white min-[1440px]:text-[24px] min-[1440px]:leading-[28.8px]">
                  {card.title}
                </h4>
              </div>
              <p className="h-full text-[15px] font-normal leading-[22.5px] text-[#FFFFFF99] min-[1440px]:text-[16px] min-[1440px]:leading-[24px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <Image
          src={IguessGifDesktop}
          alt="gifdesktop"
          className="hidden h-full rounded-[50px] bg-cover object-cover min-[1440px]:block min-[1440px]:w-full"
        />
        <Image src={IguessGif} alt="gif" className="mt-[20px] block min-[1440px]:hidden" />
      </div>
    </div>
  );
}
