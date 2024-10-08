import React from "react";

export default function JoinProject() {
  return (
    <div className="z-[0] flex flex-col items-center pt-[706px] font-montserrat min-[1280px]:items-start min-[1280px]:pt-[300px]">
      <h2 className="bg-text-pink-radgrad bg-clip-text text-center font-manrope text-[30px] font-medium leading-[36px] text-transparent min-[1280px]:text-[50px] min-[1280px]:leading-[60px]">
        Join a unique project
      </h2>
      <div className="flex flex-col gap-[20px] pt-[40px] min-[1280px]:h-[327px] min-[1280px]:flex-row min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
        <div className="relative flex flex-col items-center min-[1280px]:h-[327px] min-[1280px]:w-[33%] min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#FF00A8]" />
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[22px] pt-[30px] text-center backdrop-blur-[25px] min-[1280px]:h-[327px] min-[1280px]:px-[50px] min-[1280px]:pb-[57px] min-[1280px]:pt-[60px] min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
            <h3 className="text-[24px] font-medium leading-[28.8px] text-[#FF00A8] min-[1280px]:text-[35px] min-[1280px]:leading-[42px]">
              Easy Access
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-white min-[1280px]:text-[18px] min-[1280px]:leading-[27px]">
              SMT50 simplifies the investment process, allowing users to invest in a diversified
              portfolio of meme coins with ease.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center min-[1280px]:h-[327px] min-[1280px]:w-[33%] min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#0047FF]" />
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[45px] pt-[30px] text-center backdrop-blur-[25px] min-[1280px]:h-[327px] min-[1280px]:px-[50px] min-[1280px]:pb-[84px] min-[1280px]:pt-[60px] min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
            <h3 className="text-[24px] font-medium leading-[28.8px] text-[#0047FF] min-[1280px]:text-[35px] min-[1280px]:leading-[42px]">
              Solana Blockchain
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-white min-[1280px]:text-[18px] min-[1280px]:leading-[27px]">
              Solana provides SMT50 with high speed and low transaction costs
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center min-[1280px]:h-[327px] min-[1280px]:w-[33%] min-[1366px]:h-[300px] min-[1550px]:h-[290px] min-[1750px]:h-[296px] min-[1850px]:h-[265px]">
          <div className="absolute h-[20px] w-[240px] rounded-[100px] bg-[#00FFD1]" />
          <div className="mt-[5px] flex flex-col items-center gap-[10px] rounded-[20px] border-[2px] border-solid border-[#ffffff1A] bg-transparentCardGrad px-[30px] pb-[45px] pt-[30px] text-center backdrop-blur-[20px] min-[1280px]:h-[327px] min-[1280px]:px-[50px] min-[1280px]:pb-[57px] min-[1280px]:pt-[60px] min-[1366px]:h-[300px] min-[1550px]:h-[325px] min-[1850px]:h-[265px]">
            <h3 className="text-[24px] font-medium leading-[28.8px] text-[#00FFD1] min-[1280px]:text-[35px] min-[1280px]:leading-[42px]">
              Top 50 Meme Coins
            </h3>
            <p className="text-[15px] font-normal leading-[22.5px] text-white min-[1280px]:text-[18px] min-[1280px]:leading-[27px]">
              Investing in the best performing meme coins that are constantly updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
