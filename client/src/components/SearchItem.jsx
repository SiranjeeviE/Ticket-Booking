import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-md flex justify-between gap-5 mb-5 shadow-sm bg-white hover:shadow-md transition-shadow">
            <img
                src={item.photos[0] || "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"}
                alt=""
                className="w-[200px] h-[200px] object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 flex-2">
                <h1 className="text-xl font-bold text-primary-600">{item.name}</h1>
                <span className="text-xs text-gray-500">{item.distance}m from center</span>
                <span className="text-xs bg-green-600 text-white w-max p-1 rounded-sm">Free airport taxi</span>
                <span className="text-xs font-bold text-gray-700">Studio Apartment with Air conditioning</span>
                <span className="text-xs text-gray-500">{item.desc}</span>
                <span className="text-xs font-bold text-green-600">Free cancellation</span>
                <span className="text-xs text-green-600">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="flex flex-col justify-between flex-1">
                {item.rating && (
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Excellent</span>
                        <button className="bg-primary-800 text-white p-1 font-bold border-none rounded-sm">{item.rating}</button>
                    </div>
                )}
                <div className="text-right flex flex-col gap-1">
                    <span className="text-2xl font-normal">${item.cheapestPrice}</span>
                    <span className="text-xs text-gray-500">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="bg-primary-600 text-white font-bold py-2 px-4 rounded cursor-pointer w-full hover:bg-primary-700 transition-colors">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
