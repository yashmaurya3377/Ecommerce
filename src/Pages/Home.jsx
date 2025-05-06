import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [Allproducts, setAllproducts] = useState([]);
  // console.log(Allproducts);

  const getData = async () => {
    let res = await fetch("https://dummyjson.com/products?limit=0");
    let data = await res.json();
    // console.log(data);
    setAllproducts(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-red-200 gap-3 md:gap-0">
        <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-10 bg-amber-100">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-500">
            Ecommerce
          </h1>
          <p className="text-base sm:text-lg mb-4 md:mb-6 text-gray-800 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-green-500 md:to-gray-800">
            Discover amazing products at unbeatable prices. Start your shopping
            journey with us today!
          </p>
          <button className="px-5 py-2 text-sm sm:text-base rounded text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105">
            Shop Now
          </button>
        </div>

        <div className="hidden sm:block md:w-1/2 h-auto overflow-hidden">
          <img
            className="w-full h-auto max-h-96 object-cover cursor-pointer"
            src="https://blinkstore.in/wp-content/uploads/sites/29/2024/08/Ecommerce-Products-1.webp"
            alt="Ecommerce Banner"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-4">
        {Allproducts.map((ele, i) => (
          <div
            key={i}
            className="homeCard flex flex-col justify-between  rounded-lg  shadow-sm hover:shadow-2xl transition-shadow "
          >
            <div className="">
              <img
                src={ele.thumbnail}
                alt={ele.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-2 line-clamp-2">
                {ele.title}
              </h3>
              <p className="text-gray-200 mb-4">Price: ${ele.price}</p>
              <div className="flex space-x-3">
                <Link
                  to="/Add"
                  className="flex-1 text-center bg-red-100 hover:bg-red-200 text-red-700 py-1  rounded-lg transition-colors"
                >
                  Add to cart
                </Link>
                <Link
                  to="/viwe"
                  state={ele}
                  className="flex-1 text-center bg-green-100 hover:bg-green-200 text-green-700 py-1 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
