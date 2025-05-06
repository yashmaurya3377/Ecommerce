import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const ViewDetails = () => {
  const[selectedimg,setselecteimg]=useState('')
  console.log(selectedimg);
  
  const location = useLocation();
  const product = location.state;
  const hendleimg = (url, i) => {
    console.log(url);
    setselecteimg(url)
  };
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className=" bg-white/10 rounded-4xl ">
          <img
            src={selectedimg?selectedimg : product.thumbnail}
            alt={product.title}
            className="w-5/1 h-85 object-center  shadow-md mb-4"
          />
          <div className="flex flex-wrap gap-5">
            {product.images.map((url, i) => (
              <img
                key={i}
                src={url}
                onClick={() => hendleimg(url, i)}
                alt={`Product ${i}`}
                className="w-24 h-34 object-cover rounded hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>

        <div className="  p-6 rounded-2xl h-max shadow-2xl ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-100 mb-2">Product ID: {product.id}</p>
          <p className="text-gray-100 text-base leading-relaxed mb-4">
            {product.description}
          </p>
          <p className="text-xl font-bold text-red-600 mb-2">
            {" "}
            <span className="text-xl text-gray-100 ml-2">price: </span>
            {product.price} ${" "}
          </p>
          <p className="text-xl font-bold text-red-600 mb-2">
            {" "}
            <span className="text-xl text-gray-100 ml-2">category: </span>
            {product.category}{" "}
          </p>
          <p className="text-xl font-bold text-red-600 mb-2">
            {" "}
            <span className="text-xl text-gray-100 ml-2">Off: </span>
            {product.discountPercentage} %
          </p>
          <div className="flex items-center gap-1 text-yellow-500 mb-4">
            <span className="text-sm text-yellow-300 ml-2">
              Brand: {product.brand}
            </span>
            <span className="text-sm  text-yellow-300 ml-2">
              ({product.rating}★★★★★)
            </span>
          </div>
          <p className="text-md font-bold text-red-600 mb-4">
            <span className="text-md text-gray-100 ml-2">Warrenty: </span>
            {product.warrantyInformation}
          </p>
          <p className="text-md font-bold text-red-600 mb-4">
            {" "}
            <span className="text-md text-gray-100 ml-2">delivery : </span>
            {product.shippingInformation}
          </p>
          <button    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 me-3 rounded-lg hover:bg-blue-700 transition"
         >comments</button>
  
         
          <Link
            to="/"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
