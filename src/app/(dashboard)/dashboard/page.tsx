import Transactions from "@/components/Transactions";
import Barchart from "@/components/barchart";
import AddCard from "@/components/addCard";
import React from "react";
import Quick from "@/components/quick";
import Cards from "@/components/cards";
import HeadNav from "@/components/layout/headNav";

const Dashboardpage = () => {
  const transactions = [{ description: "Transaction 1", amount: "100" }];
  return (
    <main className="md:w-full w-[100vw]">
      <HeadNav />

      <div className=" container flex flex-col  lg:flex-row justify-between md:space-x-6">
        <div className="flex flex-col flex-1">
          <div className="flex pb-4 ">
            {/* <div className="flex md:flex-wrap bg-blue-400 w-full gap-2 md:gap-4"> */}
            {/* <div className="flex flex-1 flex-col gap-2 md:gap-4"> */}
            {/* <AvailableBalance />
        <LedgerBalance />
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <Income />
        <Expenses /> */}
            <Cards />
            {/* </div> */}
            {/* </div> */}
          </div>

          <div className="pb-4">
            <Barchart />
          </div>

          <div>
            <Transactions />
          </div>
        </div>

        <div className="flex flex-col mb-4 gap-2 md:gap-4">
          <AddCard />
          <Quick />
        </div>
      </div>
    </main>
  );
};

export default Dashboardpage;
