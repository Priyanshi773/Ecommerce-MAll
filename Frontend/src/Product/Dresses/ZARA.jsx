import React from 'react'
import dress1 from "../../assets/dress1.avif";
import dress2 from "../../assets/dress2.avif";
import dress3 from "../../assets/dress3.avif";
import dress4 from "../../assets/dress4.avif";
import dress5 from "../../assets/dress5.avif";
import dress6 from "../../assets/dress6.avif";

export const ZARA = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        ZARA Dresses Collection 👗
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress1} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">✨ Elegant Party Dress</h2>
            <p className="text-gray-800">
              A stunning party wear dress crafted with premium fabric and a modern silhouette.
              Ideal for celebrations, evening events, and special occasions.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹2,299</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress2} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">💃 Maxi Evening Dress</h2>
            <p className="text-gray-800">
              A flowy maxi dress featuring a graceful design and comfortable fit.
              Perfect for festive occasions, dinners, and elegant outings.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹1,899</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress3} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">🌟 A-Line Western Dress</h2>
            <p className="text-gray-800">
              Trendy A-line dress with a flattering fit and contemporary style.
              Great for college events, casual outings, and weekend plans.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹1,699</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress4} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">🎀 Satin Midi Dress</h2>
            <p className="text-gray-800">
              Luxurious satin midi dress that combines sophistication and comfort.
              Ideal for date nights, parties, and special celebrations.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹2,499</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress5} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">🌹 Off-Shoulder Dress</h2>
            <p className="text-gray-800">
              A chic off-shoulder dress that adds elegance and confidence to your look.
              Perfect for parties, dinners, and special occasions.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹1,799</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress6} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">☀️ Sleeveless Summer Dress</h2>
            <p className="text-gray-800">
              Lightweight and breathable, this sleeveless dress is perfect for warm days,
              beach outings, and summer adventures.
            </p>
            <p className="text-gray-600 text-2xl font-bold">₹1,199</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ZARA;
