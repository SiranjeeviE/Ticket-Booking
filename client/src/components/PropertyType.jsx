import React from 'react';

const PropertyType = () => {
    const images = [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">Browse by property type</h2>
            <div className="flex justify-between gap-5 overflow-x-auto pb-4">
                {["Hotels", "Apartments", "Resorts", "Villas", "Cabins"].map((type, i) => (
                    <div className="flex-1 min-w-[200px] cursor-pointer hover:opacity-90 transition-opacity" key={i}>
                        <img
                            src={images[i]}
                            alt={type}
                            className="w-full h-[150px] object-cover rounded-xl mb-3"
                        />
                        <div className="font-bold text-gray-800 dark:text-gray-200">{type}</div>
                        <div className="text-sm text-gray-400 font-light">233 {type.toLowerCase()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyType;
