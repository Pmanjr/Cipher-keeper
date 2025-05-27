import React, { useState } from "react";
import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Subtract } from "../assets/subtract.svg";

const InvoiceProducts = ({ item, index, productArray, setProductArray }) => {
  const [quantity, setQuantity] = useState(1);
    
  console.log(productArray)

  const handleDelete = (i) => {
    productArray.splice(i, 1);
    setProductArray([...productArray])
  }

  return (
    <div className="mx-4 mt-2 grid grid-cols-11 gap-4 sm:flex sm:flex-col sm:border select-none sm:border-[#E6EDFF] sm:items-start sm:p-4 items-center text-[12px]">
      <div className="col-span-3">{item.name}</div>
      <div className="flex items-center gap-x-2 col-span-3">
        <span>Category</span>
        <span className="border border-[#E6EDFF] px-2 py-1 rounded-md">{item.category.name}</span>
      </div>
      <div className="flex items-center gap-x-2 col-span-2">
        <span>Price</span>
        <span className="border border-[#E6EDFF] px-2 py-1 rounded-md">N {item.price}</span>
      </div>
      <div className="flex items-center gap-x-2 col-span-2">
        <span>Quantity</span>
        <span className="border border-[#E6EDFF] px-2 py-1 rounded-md flex items-center sm:gap-x-10 gap-x-6">
          <span>{item.numberInStock=quantity}</span>
          <div className="flex gap-x-2 sm:gap-x-4 hover:cursor-pointer items-center">
            <Add onClick={() => (setQuantity(quantity+1))} />
            <Subtract
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
          </div>
        </span>
      </div>
      <button onClick={()=>(handleDelete(index))} className="px-1 py-1 bg-red-500 text-white select-none rounded-md">Delete</button>
    </div>
  );
};

export default InvoiceProducts;
