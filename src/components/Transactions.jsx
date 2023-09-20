"use client";
import React, { useState } from "react";
import { FiChevronDown, FiMoreVertical } from "react-icons/fi";

const Transactions = () => {
  const transactions = [
    { name: "Maddona", type: "Food", Date: "25-6-2023", Amount: 254 },
    { name: "Starbucks", type: "Coffee", Date: "12-8-2023", Amount: 15 },
    { name: "Amazon", type: "Shopping", Date: "3-4-2023", Amount: 100 },
    { name: "Gas Station", type: "Fuel", Date: "8-7-2023", Amount: 60 },
    { name: "Gym Membership", type: "Fitness", Date: "17-9-2023", Amount: 50 },
  ];

  const [isActive, setIsActive] = useState(null);

  const toggleDropdown = (index) => {
    if (index === isActive) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div className="bg-white overflow-x-scroll text-black h-auto rounded-md">
      <div>
        <div className="gap-6 pt-4 p-4">
          <h1 className="text-md pb-4">Transaction History</h1>
          <table className="w-full overflow-x-scroll">
            {/* <thead className="bg-blue-400 flex-1 w-full">
              <tr className="rounded-md w-full flex justify-between ">
                <th className="table_head">Name</th>
                <th className="table_head">Type</th>
                <th className="table_head">Date</th>
                <th className="table_head">Amount</th>
                <th className="table_head">
                  <FiMoreVertical size={20}/>
                </th>
              </tr>
            </thead> */}
            <thead>
              <tr>
                <th className=" text-left">Name</th>
                <th className=" text-left">Type</th>
                <th className=" text-left">Date</th> 
                <th className=" text-left">Amount</th> 
                <th className=" text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item, index) => (
                <tr key={item.name}>
                  <td className="table_body">{item.name}</td>
                  <td className="table_body">{item.type}</td>
                  <td className="table_body">{item.Date}</td>
                  <td className="table_body">$ {item.Amount}</td>
                  <td onClick={() => toggleDropdown(index)}>
                    <FiChevronDown
                      className={`duration-300 ${
                        isActive === index ? "rotate-180" : ""
                      }`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
