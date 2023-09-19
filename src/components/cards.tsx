import React from "react";
import { IconType } from "react-icons";
import {
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdMoney,
  MdMoneyOff,
} from "react-icons/md";
type cardType = {
  icon: IconType;
  title: string;
  value: string;
};

const Cards = () => {
  const cardItems: cardType[] = [
    { icon: MdAccountBalance, title: "Available Balance", value: "$ 3000" },
    { icon: MdAccountBalanceWallet, title: "Ledger Balance", value: "$ 2400" },
    { icon: MdMoney, title: "Total Income", value: "$ 3500" },
    { icon: MdMoneyOff, title: "Total Expenses", value: "$ 3800" },
  ];
  return (
    <div className="flex-1 mt-5 flex flex-wrap items-center justify-between ">
      {/* <div className=" text-black w-32 md:w-40 h-32 rounded-md mb-3  ">
        <div className=""> */}
      {cardItems.map((items) => (
        <div
          className="  md:w-[23%] w-[48%] min-h-32 rounded-md bg-white mb-3 text-black py-4 px-4"
          key={items.title}
        ><div className="flex pb-2 gap-2">
                   <h1 className="text-base md:text-md">{items.title}</h1>
            <span>
              <items.icon size={34} />
            </span>
        </div>
     
            <p className="tracking-widest text-xl py-2 font-semibold md:text-2xl">
              {items.value}
            </p>
        </div>
      ))}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Cards;
