import Image from "next/image";
import React from "react";

const Quick = () => {
  const transactions = [{ image: "/face2.jpg", name: "Luis Hamilton"}, {image:"/face3.jpg", name:"Mon Luffy"}, { image: "/face4.jpg", name: "Sanji Cook" }];
  return (
    <div className="bg-white rounded-md p-4 w-full text-black">
      <h1 className="py-4 text-base">Quick Transactions</h1>
      <div className="gap-2 ">
       
        <div>
          <div className="overflow-hidden flex  flex-row">
            
            {transactions.map((item) => (
              <div className=" md:w-1/3 w-full  " key={item.name}>
                <div className="flex justify-center items-center">
                <Image
              src={item.image}
              alt=""
              width={80}
              height={80}
              className="object-cover aspect-square rounded-full" 
            />
                </div>
              
<div className="my-2 flex justify-center items-center">
<label className="text-center text-sm">{item.name}</label>
</div>


              </div>
            ))}
           
          </div>
        </div>
       
        

      <div className="flex justify-center py-4 gap-2">
        <input
          type="number"
          placeholder="Amount"
          className="outline-none py-2 px-2 w-28 place-slate-200 border-black border-2 rounded-md"
        />

        <button className="button">
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default Quick;
