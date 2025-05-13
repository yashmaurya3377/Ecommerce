import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const ViewDetails = () => {
  const [selectedimg, setselecteimg] = useState("");
  const [moreDetail, setmoreDetail] = useState(false);
  const Handlemore = () => {
    setmoreDetail(!moreDetail);
  };

  const location = useLocation();
  const product = location.state;
  const hendleimg = (url, i) => {
    setselecteimg(url);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/*path of prodect*/}
        <nav className="mb-8">
          <ol className="flex items-center  text-sm text-gray-300">
            <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
            <li>/</li>
            <li><Link className="hover:text-pink-400 ">{product.category}</Link></li>
            <li>/</li>
            <li className="text-pink-400 truncate max-w-xs">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  justify-center items-center  ">
          {/* Image Gallery */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl" >
            <div className="flex justify-center items-center mb-6">
              <img
                src={selectedimg || product.thumbnail}
                alt={product.title}
                className="max-h-96 w-auto object-contain rounded-lg shadow-lg "
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((url, i) => (
                <button
                  key={i}
                  onClick={() => hendleimg(url, i)}
                  className={`rounded-lg overflow-hidden transition-all ${selectedimg === url ? 'ring-4 ring-pink-500' : 'hover:ring-2 ring-pink-300'}`}
                >
                  <img
                    src={url}
                    alt={`Product ${i}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl overflow-y-scroll h-[72vh] bg-scroll">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{product.title}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                      <IoMdStar key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                    {product.rating % 1 > 0 && (
                      <IoMdStarHalf className="text-yellow-400 w-5 h-5" />
                    )}
                  </div>
                  <span className="text-gray-300 text-sm">({product.rating})</span>
                </div>
              </div>
              <span className="bg-pink-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.brand}
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-pink-400">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                    Save {product.discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Meta */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-sm text-gray-300">Category</p>
                <p className="font-medium text-white capitalize">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Stock</p>
                <p className="font-medium text-white">{product.stock} available</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Warranty</p>
                <p className="font-medium text-white">{product.warrantyInformation}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Delivery</p>
                <p className="font-medium text-white">{product.shippingInformation}</p>
              </div>
            </div>

            {/* Description */}
            <div className=" mb-8">
              <button
                onClick={Handlemore}
                className="flex items-center text-pink-400 hover:text-pink-300 transition mb-4"
              >
                <span className="mr-2">{moreDetail ? 'Hide ' : 'Show'} Details</span>
                <IoIosArrowDown />

              </button>
              {moreDetail && (
                <div className="">
                  <p className="text-gray-300">returnPolicy: {product.returnPolicy}</p>
                  <p className="text-gray-300">min Order {product.minimumOrderQuantity} pice</p>
                  <p className="text-gray-300"> prodect type : {product.tags.map((ele,i)=>{
                    return  <span className="text-gray-300" key={ele}>{ ele}, </span>
                  })}</p>
                 <ul className="text-gray-100 ">dimensions: <br />
                  <span> width: {product.dimensions.width} cm,</span>
                  <span> height: {product.dimensions.height} cm, </span>
                  <span> depth: {product.dimensions.depth} cm</span>
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row">
              <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium transition flex items-center justify-center">
                Add to Cart
              </button>
              <Link
                to="/"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition flex items-center justify-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;