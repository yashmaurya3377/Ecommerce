import React, { useState, useEffect } from "react";

const Cart = ({ Cartarr }) => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const shippingFee = 10.00;

  useEffect(() => {
    setCartItems(Cartarr.map(item => ({ 
      ...item,
      originalPrice: item.price / (item.qty || 1),
      productDiscount: item.discountPercentage || 0
    })));
  }, [Cartarr]);

  // Calculate subtotal before any discounts
  const subtotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.qty), 0);

  // Calculate product-level discounts
  const productDiscounts = cartItems.reduce((sum, item) => {
    return sum + (item.originalPrice * item.qty * (item.productDiscount / 100));
  }, 0);

  // Calculate subtotal after product discounts
  const discountedSubtotal = subtotal - productDiscounts;

  // Calculate total after all discounts and shipping
  const total = discountedSubtotal - couponDiscount + shippingFee;

  const handleRemove = (itemToRemove) => {
    const updated = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updated);
  };

  // Increase quantity
  const handlePlus = (item, index) => {
    const updated = [...cartItems];
    updated[index].qty += 1;
    updated[index].price = updated[index].originalPrice * updated[index].qty * (1 - (updated[index].productDiscount / 100));
    setCartItems(updated);
  };

  // Decrease quantity
  const handleSub = (item, index) => {
    if (item.qty > 1) {
      const updated = [...cartItems];
      updated[index].qty -= 1;
      updated[index].price = updated[index].originalPrice * updated[index].qty * (1 - (updated[index].productDiscount / 100));
      setCartItems(updated);
    }
  };

  // Show coupon hints
  const showCouponHints = () => {
    alert("Available coupons:\n1. 'SAVE10' - 10% discount\n2. 'SAVE20' - 20% discount");
  };

  // Apply coupon
  const applyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setCouponDiscount(discountedSubtotal * 0.1); 
    } else if (coupon.toUpperCase() === "SAVE20") {
      setCouponDiscount(discountedSubtotal * 0.2); 
    } else {
      setCouponDiscount(0);
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="container justify-center items-start flex gap-4 pt-10">
      {/* Cart Items Section */}
      <div className="bg-amber-300 p-5 w-full max-w-5xl rounded">
        <h1 className="text-2xl font-bold border-b pb-2 mb-4">Cart</h1>

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
            {cartItems.map((ele, i) => (
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
                    <button
                      className="bg-gray-600 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => handleSub(ele, i)}
                    >
                      -
                    </button>
                    <span>{ele.qty}</span>
                    <button
                      className="bg-gray-600 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => handlePlus(ele, i)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-2">
                  ${ele.price.toFixed(2)}
                  {ele.productDiscount > 0 && (
                    <span className="text-xs text-red-600 block">
                      ({ele.productDiscount}% off)
                    </span>
                  )}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleRemove(ele)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary Section */}
      <div className="bg-amber-100 h-auto w-80 flex flex-col p-4 rounded-lg sticky top-10">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter coupon"
            className="bg-amber-200 px-3 py-2 rounded-l-lg w-2/3"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button 
            className="bg-amber-400 px-4 py-2 rounded-r-lg cursor-pointer hover:bg-amber-500"
            onClick={applyCoupon}
          >
            Apply
          </button>
        </div>
        <button 
          onClick={showCouponHints}
          className="text-green-600 text-sm mb-4 cursor-pointer hover:underline"
        >
          Looking for coupon codes?
        </button>
        <div className="space-y-2 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span>Product Price</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Product Discount</span>
            <span>-${productDiscounts.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${discountedSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon Discount</span>
            <span>-${couponDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-300 pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;