import React, { useState , useEffect } from 'react'
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";
import pizza5 from "../../assets/pizza5.png";
import pizza6 from "../../assets/pizza6.png";


const Dominos = () => {
    const [cart, setCart] = useState( () => {
      const saved  = localStorage.getItem("food_cart");
      return saved ? JSON.parse(saved) : {} ;
    });

     useEffect(() => {
    localStorage.setItem("food_cart", JSON.stringify(cart));
  }, [cart]);

    const hasItems = Object.keys(cart).length > 0;

    const addItem = (id, name, price) => {
        setCart(prev => ({
            ...prev, [id]: {
                name,
                price,
                qty: 1,
            }
        }));
    }

    const increase = (id) => {
        setCart(prev => ({
            ...prev, [id]: {
                ...prev[id],
                qty: prev[id].qty + 1,
            }
        }))
    }

    const decrease = (id) => {
        setCart(prev => {
            const item = prev[id];

            if (item.qty == 1) {
                const copy = { ...prev };
                delete copy[id];
                return copy;
            }

            return {
                ...prev, [id]: {
                    ...item,
                    qty: item.qty - 1,
                }
            }
        })
    }

    return (
        <div className="min-h-screen bg-stone-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
                DOMINO'S
            </h1>

            {/* Grid */}
            <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza1} className="w-full h-500px object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">VEG EXTRAVAGANZA</h2>
                        <p className="text-gray-800 "> Veg Extravaganza is a highly popular, fully loaded vegetarian pizza
                            premium offering curated by Domino's Pizza India.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹309/-</p>


                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza1"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza1", "Veg Extravaganza", 309)
                                    }
                                    className="mt-8 mb-2 flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-6  px-10 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza1")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza1")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza2} className="w-full h-500px object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">FARM HOUSE</h2>
                        <p className="text-gray-800 "> A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy,
                            crisp capsicum, succulent mushrooms and fresh tomatoes</p>
                        <p className="text-gray-600 text-2xl font-bold">₹350/-</p>
                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza2"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza2", "FARM HOUSE", 350)
                                    }
                                    className="mt-10 flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-6  px-10 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza2")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza2")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black flex flex-col">
                    <img src={pizza3} className="w-full h-500px object-cover" />
                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-2xl font-bold">DELUXE VEGGIE</h2>
                        <p className="text-gray-800 "> For a vegetarian looking for a BIG treat that goes easy on the spices,
                            this one's got it all.. The onions, the capsicum,
                            those delectable mushrooms - with paneer and golden corn to top it all.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹400/-</p>
                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza3"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza3", "DELUXE VEGGIE", 400)
                                    }
                                    className="mt-5 mb-2 flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-6  px-1 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza3")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza3")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza4} className="w-full h-500px object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Mexican Green Wave</h2>
                        <p className="text-gray-800 ">A pizza loaded with crunchy onions, crisp capsicum,
                            juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs. </p>
                        <p className="text-gray-600 text-2xl font-bold">₹399/-</p>
                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza4"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza4", "Mexican Green Wave", 399)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-6  px-10 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza4")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza4")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black flex flex-col">
                    <img src={pizza5} className="w-full h-500px object-cover" />
                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-2xl font-bold">CHEESE N CORN</h2>
                        <p className="text-gray-800 "> Topped with shredded, crunchy green capsicum (bell peppers)
                            and liquid creamy cheese on a regular crust.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹450/-</p>
                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza5"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza5", "CHEESE N CORN", 450)
                                    }
                                    className="mt-auto flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-auto  px-10 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza5")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza5")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>


                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black flex flex-col">
                    <img src={pizza6} className="w-full h-500x object-cover " />
                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-2xl font-bold">VEGGIE PARADISE</h2>
                        <p className="text-gray-800 "> Topped with shredded, goldern Corn, Black Olives, Capsicum & Red Paprika crunchy green capsicum
                            and liquid creamy cheese on a regular crust.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹549/-</p>
                        {/* ⭐ BUTTON (Dominos logic) */}
                        {(() => {
                            const item = cart["pizza6"];

                            return !item ? (
                                <button
                                    onClick={() =>
                                        addItem("pizza6", "VEGGIE PARADISE", 549)
                                    }
                                    className="mt-auto flex items-center justify-center px-10 py-2 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                            ) : (
                                <div className="mt-auto  px-10 py-2 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("pizza6")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("pizza6")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                </div>

            </div>



            {hasItems && (
                <div className="mt-10 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                    {Object.entries(cart).map(([id, item]) => (
                        <div key={id} className="flex justify-between py-3 border-b">
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p>Qty: {item.qty}</p>
                            </div>

                            <p className="font-bold">
                                ₹{item.price * item.qty}
                            </p>
                        </div>
                    ))}

                    <div className="mt-4 text-2xl font-bold text-right">
                        Total: ₹{
                            Object.values(cart).reduce(
                                (acc, item) => acc + item.price * item.qty,
                                0
                            )
                        }
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dominos;