import React, { useState } from "react";
import { useCart } from "../Dresses/CartContext";

const Cart = () => {
  const [toast, setToast] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { cartItems, addToCart, decreaseQty, removeFromCart, clearcart } = useCart();


  const zaraItem = cartItems.filter(
    item => item.brand === "zara"
  )

  const hmItem = cartItems.filter(
    item => item.brand === "h&m"
  )

  const showToast = (msg) => {
    setMsg(msg);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  }
  //  subtotal calculate
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-100 p-4 md:p-10 min-h-screen">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        Shopping Cart
      </h1>

      {/* MAIN FLEX LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="flex flex-col gap-5 w-full lg:w-2/3">

          {cartItems.length === 0 ? (
            <p className="text-xl md:text-2xl">Your cart is empty</p>
          ) : (

            <>

              {zaraItem.length > 0 &&
                (
                  <>
                    <h2 className="text-xl md:text-2xl font-bold">ZARA</h2>

                    {zaraItem.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-white p-4 rounded-lg shadow"
                      >

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          alt="product"
                          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded"
                        />

                        {/* DETAILS */}
                        <div className="text-center sm:text-left">
                          <h2 className="font-bold text-lg md:text-2xl">
                            {item.name}
                          </h2>

                          <p className="text-base md:text-xl text-gray-700">
                            ₹{item.price}
                          </p>
                        </div>

                        {/* QUANTITY CONTROLS */}
                        <div className="flex items-center gap-3 sm:ml-auto">

                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="bg-gray-300 px-3 py-1 rounded"
                          >
                            -
                          </button>

                          <span className="font-bold text-lg md:text-xl">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => addToCart(item)}
                            className="bg-gray-300 px-3 py-1 rounded"
                          >
                            +
                          </button>

                        </div>

                        {/* REMOVE BUTTON */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded sm:ml-4 w-full sm:w-auto"
                        >
                          Remove
                        </button>

                      </div>
                    )
                    )}
                  </>
                )}

              {hmItem.length > 0 &&
                (
                  <>
                    <h2 className="text-xl md:text-2xl font-bold">H&M</h2>

                    {hmItem.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-white p-4 rounded-lg shadow"
                      >

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          alt="product"
                          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded"
                        />

                        {/* DETAILS */}
                        <div className="text-center sm:text-left">
                          <h2 className="font-bold text-lg md:text-2xl">
                            {item.name}
                          </h2>

                          <p className="text-base md:text-xl text-gray-700">
                            ₹{item.price}
                          </p>
                        </div>

                        {/* QUANTITY CONTROLS */}
                        <div className="flex items-center gap-3 sm:ml-auto">

                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="bg-gray-300 px-3 py-1 rounded"
                          >
                            -
                          </button>

                          <span className="font-bold text-lg md:text-xl">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => addToCart(item)}
                            className="bg-gray-300 px-3 py-1 rounded"
                          >
                            +
                          </button>

                        </div>

                        {/* REMOVE BUTTON */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded sm:ml-4 w-full sm:w-auto"
                        >
                          Remove
                        </button>

                      </div>
                    )
                    )}
                  </>
                )}

            </>
          )}
        </div>


        {/* RIGHT SIDE - ORDER SUMMARY */}
        {cartItems.length > 0 && (

          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-xl p-6 h-fit">

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-base md:text-lg text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-base md:text-lg text-gray-700 mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : shipping}</span>
            </div>

            <div className="flex justify-between text-xl md:text-2xl font-bold border-t pt-3 mt-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            {/* FORM */}
            <h2 className="mt-6 text-base md:text-lg font-semibold">
              Full Name
            </h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="mt-2 w-full border px-4 py-2 rounded-lg"
            />

            <h2 className="mt-4 text-base md:text-lg font-semibold">
              Shipping Address
            </h2>

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
              className="mt-2 w-full border px-4 py-2 rounded-lg"
            />

            {/* BUTTON */}
            <button
              onClick={() => {
                showToast("Order Placed "),
                  clearcart();
                setName("");
                setAddress("");
              }}


              className="mt-5 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Place Order
            </button>

          </div>
        )}
      </div>

      {/* ✅ TOAST UI */}
      {toast && (
        <div
          className="fixed bottom-5 right-5 bg-black text-white px-6 md:px-10 py-3 md:py-5 rounded-lg shadow-lg z-50 text-sm md:text-base"
        >
          {msg}
        </div>
      )}
    </div>
  );
};

export default Cart;