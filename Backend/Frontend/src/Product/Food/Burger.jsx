import React , {useState , useEffect} from 'react'
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import br6 from "../../assets/br6.png";


const Burger = () => {

   const [cart ,setCart] = useState(() => {
      const saved  = localStorage.getItem("food_cart");
      return saved ? JSON.parse(saved) : {};
   });

     useEffect(() => {
       localStorage.setItem("food_cart", JSON.stringify(cart));
     }, [cart]);

   const hashedItem = Object.keys(cart).length > 0;


   const addItem = (id , name , price) => {
    setCart(prev => ({
        ...prev , [id] : {
            name ,
            price ,
            qty : 1,
        }
    }));
   }
  
   const increase = (id) => {
     setCart(prev => ({
        ...prev , [id] : {
            ...prev[id] ,
            qty : prev[id].qty + 1 ,
        }
     }))
   }

   const decrease = (id) => {
    setCart(prev => {
        const item = prev[id];
         if( item.qty == 1){
            const copy = {...prev};
            delete copy[id];
            return copy;
         }
         return {
            ...prev , [id] : {
               ...prev[id] ,
                qty : prev[id].qty - 1 ,
            }
         }
    })   
   }
   
    return (
        <div className="min-h-screen bg-stone-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
                Burger King
            </h1>

            {/* Grid */}
            <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={b1} className="w-full h-96 object-fit" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Korean Kimchi Veg Whopper</h2>
                        <p className="text-gray-800" >The Korean Kimchi Paneer Burger is a popular, limited-time menu item from Burger King India.
                            It features a crispy paneer patty dunked in a sweet-and-spicy Korean glaze, and served on a toasted premium brioche bun</p>
                        <p className="text-gray-600 text-2xl font-bold">₹199/- </p>
                      {( () => {
                        const item = cart["b1"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("b1","Korean Kimchi Veg Whopper", 199)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-6  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("b1")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("b1")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>


                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={b2} className="w-full h-96 object-fit" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Veg Makhni Burst Burger</h2>
                        <p className="text-gray-800"> A bold fusion of the classic Whopper with
                            authentic Korean flavor profiles. It is notoriously saucy, packed with heat,
                            and balanced by a tangy-sweet kimchi sauce. </p>
                        <p className="text-gray-600  text-2xl font-bold">₹69/- </p>
                      {( () => {
                        const item = cart["b2"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("b2","Korean Kimchi Veg Whopper", 199)
                                    }
                                    className="mt-20 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-12  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("b2")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("b2")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={b3} className="w-full h-96 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Crispy Veg Double Patty</h2>
                        <p className="text-gray-800"> The Crispy Veg Double Patty is a fan-favorite,
                            budget-friendly burger featuring two crunchy, golden-fried vegetable
                            patties layered with fresh onions, creamy mayo, and signature sauces, all served in a soft premium bun </p>
                        <p className="text-gray-600  text-2xl font-bold ">₹89/- </p>
                         {( () => {
                        const item = cart["b3"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("b3","Crispy Veg Double Patty", 89)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-6  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("b3")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("b3")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={b4} className="w-full h-96 object-fit" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Paneer Whopper Deluxe Meal</h2>
                        <p className="text-gray-800"> The Crispy Veg Double Patty is a fan-favorite,
                            budget-friendly burger featuring two crunchy, golden-fried vegetable
                            patties layered with fresh onions, creamy mayo, and signature sauces, all served in a soft premium bun </p>
                        <p className="text-gray-600  text-2xl font-bold ">₹377/- </p>
                            {( () => {
                        const item = cart["b4"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("b4","Paneer Whopper Deluxe Meal", 377)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-6  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("b4")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("b4")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={b5} className="w-full h-96 object-fit" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Crispy Veg Double Patty</h2>
                        <p className="text-gray-800"> The Crispy Veg Double Patty is a fan-favorite,
                            budget-friendly burger featuring two crunchy, golden-fried vegetable
                            patties layered with fresh onions, creamy mayo, and signature sauces, all served in a soft premium bun </p>
                        <p className="text-gray-600  text-2xl font-bold ">₹500/- </p>
                            {( () => {
                        const item = cart["b5"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("b5","Crunchy Soft Paneer", 500)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-6  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("b5")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("b5")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-90 transition border border-b-black">
                    <img src={br6} className="w-full h-96 object-fit" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">BK Veg Meal For 2</h2>
                        <p className="text-gray-800"> The Crispy Veg Double Patty is a fan-favorite,
                            budget-friendly burger featuring two crunchy, golden-fried vegetable
                            patties layered with fresh onions, creamy mayo, and signature sauces, all served in a soft premium bun </p>
                        <p className="text-gray-600  text-2xl font-bold ">₹707/- </p>
                            {( () => {
                        const item = cart["br6"];

                       return !item ? (
                         <button
                                    onClick={() =>
                                        addItem("br6","BK Veg Meal For 2", 707)
                                    }
                                    className="mt-15 flex items-center justify-center px-10 py-4 w-full text-xl font-bold text-amber-900 border rounded-lg"
                                >
                                    Add +
                                </button>
                        )  : (
                             <div className="mt-6  px-10 py-4 w-full flex items-center justify-center gap-4 bg-pink-100 rounded-lg">
                                    <button onClick={() => decrease("br6")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5"> - </button>

                                    <span className="text-xl font-bold">
                                        {item.qty}
                                    </span>

                                    <button onClick={() => increase("br6")} className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-md text-lg font-bold gap-5">
                                        +
                                    </button>
                                </div>
                        )
                      })()}
                    </div>
                </div>
            </div>

                {hashedItem && (
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

export default Burger;