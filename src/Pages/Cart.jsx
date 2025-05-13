import React, { useState } from "react";

const Cart = (props) => {
  console.log(props.Cartarr)
  const Data = props.Cartarr;
  // const [Delete,setDelete]=useState(Data.qty)
;
  const handleRemove=(ele)=>{
    console.log(ele);
  }
  const handlePlus =(ele)=>{
    console.log(ele.qty)
    ele.qty=ele.qty+1
  }
  const handlesub =(ele)=>{
    // console.log(ele.qty)
    if(ele.qty > 1){
      ele.qty=ele.qty-1
    }
    //
  }
  return (
    <div className="container justify-center items-center flex gap-2 pt-30">
      <div className="bg-amber-300 p-5 w-full max-w-5xl rounded">
        <h1  className="text-2xl font-bold border-b pb-2 mb-4">Cart</h1>

        <table className="w-full table-auto bg-white rounded overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Price</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((ele, i) => (
              <tr key={i} className="text-center border-b">
                <td className="p-2">
                  <img
                    className="h-16 w-16 object-cover mx-auto"
                    src={ele.thumbnail}
                    alt={ele.title}
                  />
                </td>
                <td className="p-2">{ele.title}</td>
                <td className="p-2">
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-gray-600 text-white px-2 py-1 rounded"onClick={()=>handlesub(ele)}>-</button>
                    <span>{ele.qty}</span>
                    <button className="bg-gray-600 text-white px-2 py-1 rounded"onClick={()=>handlePlus(ele)} >+</button>
                  </div>
                </td>
                <td className="p-2">${ele.price}</td>
                <td className="p-2">
                  <button onClick={()=>handleRemove(ele)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-amber-500 h-80 w-70"></div>
    </div>
  );
};

export default Cart;
