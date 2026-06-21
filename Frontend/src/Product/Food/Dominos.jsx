import React , {useState} from 'react'
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";
import pizza5 from "../../assets/pizza5.png";
import pizza6 from "../../assets/pizza6.png";


const Dominos = () => {
    const [toast, setToast] = useState(false);
      const [message, setMessage] = useState("");
    
       const showToast = (msg) => {
        setMessage(msg);
        setToast(true);
    
        setTimeout(() => {
          setToast(false);
        }, 2000);
      };

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
                    <img src={pizza1} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">VEG EXTRAVAGANZA</h2>
                      <p className="text-gray-800 "> Veg Extravaganza is a highly popular, fully loaded vegetarian pizza
                         premium offering curated by Domino's Pizza India.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹309/-</p>
                         <button onClick={() => showToast(" Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza2} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">FARM HOUSE</h2>
                         <p className="text-gray-800 "> A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy,
                             crisp capsicum, succulent mushrooms and fresh tomatoes</p>
                        <p className="text-gray-600 text-2xl font-bold">₹350/-</p>
                         <button onClick={() => showToast(" Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza3} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">DELUXE VEGGIE</h2>
                         <p className="text-gray-800 "> For a vegetarian looking for a BIG treat that goes easy on the spices,
                             this one's got it all.. The onions, the capsicum,
                             those delectable mushrooms - with paneer and golden corn to top it all.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹400/-</p>
                         <button onClick={() => showToast("Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

                 <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza4} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Mexican Green Wave</h2>
                         <p className="text-gray-800 ">A pizza loaded with crunchy onions, crisp capsicum,
                             juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs. </p>
                        <p className="text-gray-600 text-2xl font-bold">₹399/-</p>
                         <button onClick={() => showToast("Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

                 <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza5} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">CHEESE N CORN</h2>
                         <p className="text-gray-800 "> Topped with shredded, crunchy green capsicum (bell peppers) 
                            and liquid creamy cheese on a regular crust.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹450/-</p>
                         <button onClick={() => showToast("Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

                 <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-95 transition border border-b-black">
                    <img src={pizza6} className="w-full h-2/3 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">VEGGIE PARADISE</h2>
                         <p className="text-gray-800 "> Topped with shredded, goldern Corn, Black Olives, Capsicum & Red Paprika crunchy green capsicum
                            and liquid creamy cheese on a regular crust.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹549/-</p>
                         <button onClick={() => showToast("Item added to cart ")} className="mt-6 flex items-center justify-center gap-2 border border-b-brown-100 px-10 py-2 text-xl font-bold text-amber-900 rounded-lg transition ">
                            Add +
                        </button>
                    </div>
                </div>

            </div>

            
            {toast && (
        <div
          className="fixed bottom-5 right-5 bg-white text-black px-10 py-8 w-96 rounded-lg shadow-lg z-50 font-bold text-2xl"
        >
          {message}
        </div>
      )}
        </div>
    )
}

export default Dominos;