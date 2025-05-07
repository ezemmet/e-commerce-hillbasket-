import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Apricots from '../images/apricots.webp'
import Bamori from '../images/bamori.jpg'
import Barberries from '../images/barberries.jpg'
import CrabApple from '../images/crab-apples.jpg'
import Gehat from '../images/gehat.jpg'
import Ghingaroo from '../images/ghingaroo.jpg'
import Hisalu from '../images/hisalu.jpg'
import Kafal from '../images/kaphal.jpg'
import Kalabhatt from '../images/kala-bhatt.jpg'
import MungBeans from '../images/mung-beans.jpg'
import Rajma from '../images/rajma.jpg'
import PegionPeas from '../images/pegion-peas.jpg'
import WildMulberries from '../images/wild-mulberries.jpg'

const products = [
    {
        id: 1,
        name: "Apricots",
        category: "Fruit",
        price: 1.2,
        image: Apricots, // image should be in public/images/
    },
    {
        id: 2,
        name: "Bamori",
        category: "Fruit",
        price: 0.8,
        image: Bamori,
    },
    {
        id: 3,
        name: "Barberries",
        category: "Fruit",
        price: 0.5,
        image: Barberries,
    },
    {
        id: 4,
        name: "CrabApple",
        category: "Fruit",
        price: 1.0,
        image: CrabApple,
    },
    {
        id: 5,
        name: "Gehat",
        category: "Pulses",
        price: 1.0,
        image: Gehat,
    },
    {
        id: 6,
        name: "Ghingaroo",
        category: "Fruit",
        price: 1.0,
        image: Ghingaroo,
    },
    {
        id: 7,
        name: "Hisalu",
        category: "Fruit",
        price: 1.0,
        image: Hisalu,
    },
    {
        id: 8,
        name: "Kafal",
        category: "Fruit",
        price: 1.0,
        image: Kafal,
    },
    {
        id: 9,
        name: "Kalabhatt",
        category: "Pulses",
        price: 1.0,
        image: Kalabhatt,
    },
    {
        id: 10,
        name: "MungBeans",
        category: "Pulses",
        price: 1.0,
        image: MungBeans,
    },
    {
        id: 11,
        name: "Rajma",
        category: "Pulses",
        price: 1.0,
        image: Rajma,
    },
    {
        id: 12,
        name: "PegionPeas",
        category: "Pulses",
        price: 1.0,
        image: PegionPeas,
    },
    {
        id: 13,
        name: "WildMulberries",
        category: "Fruit",
        price: 1.0,
        image: WildMulberries,
    },
];

const ProductCard = ({ search, category }) => {

    const filtered = products.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === 'All' || item.category === category;
        return matchCategory && matchSearch;
    });

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filtered.length === 0 ? (
                <p className="text-black">No matching products found.</p>
            ) : (
                filtered.map((item) => (
                    <div key={item.id} className="bg-[#1E293B] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className='relative'>
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4 -z-10" />

                            {/* Add to Cart Button */}
                            <button className="absolute top-2 right-2 bg-amber-400 text-[#1E293B] px-4 py-2 rounded-full shadow-md hover:bg-amber-500 transition-colors duration-200">
                                Add to Cart
                            </button>
                        </div>

                        {/* Product Details */}
                        <h3 className="text-white text-lg font-semibold">{item.name}</h3>
                        <p className="text-green-400 font-semibold">₹{item.price} / KG</p>
                        <p className="text-green-400">{item.category}</p>

                        {/* Ratings */}
                        <div className="flex items-center mt-2">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-gray-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-gray-500 text-sm" />
                        </div>

                        {/* Quick View Button */}
                        <button className="mt-4 w-full bg-cyan-400 text-[#1E293B] hover:bg-cyan-500 px-4 py-2 rounded-md shadow-md transition-colors duration-200">
                            Quick View
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default ProductCard
