import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const settings = {
    
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-4 mt-0 bg-white/70">
      <div className="container mx-auto px-4">
        <h5 className="sm:text-sm font-bold text-center mb-2 text-gray-800">
          Featured Categories
        </h5>
        <Slider {...settings} className="rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-[60vh] md:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
              alt="Fashion collection"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Summer Collection
              </h3>
              <p className="text-white mt-2">Discover our new arrivals</p>
              <button className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Electronics"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-right">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Tech Gadgets
              </h3>
              <p className="text-white mt-2">The latest in technology</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.shopify.com/s/files/1/0070/7032/articles/diy-product-photography.jpg?v=1729894804"
              alt="Home decor"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Home Essentials
              </h3>
              <p className="text-white mt-2">Upgrade your living space</p>
              <button className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition">
                View Collection
              </button>
            </div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
              alt="Beauty products"
            />
            <div className="absolute  bg-gradient-to-t from-black to-transparent p-6 text-right">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Beauty & Care
              </h3>
              <p className="text-white mt-2">Pamper yourself</p>
              <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition">
                Shop Beauty
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
