import React from 'react';
import useFetch from '../hooks/useFetch'; // We will assume a hook exists or just use static for now as per "design" request
// Since we don't have the hook yet, I'll make it static for the design "wow" factor first, or stub it.
// To make it professional, I will use static data that LOOKS real, using the assets available.

const Featured = () => {
    return (
        <div className="w-full max-w-7xl mx-auto flex justify-between gap-5 z-0 px-4">
            <div className="relative text-white rounded-xl overflow-hidden h-[250px] flex-1 cursor-pointer shadow-lg transform hover:scale-105 hover:z-10 transition-all duration-300">
                <img
                    src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Dublin"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5">
                    <h1 className="text-3xl font-bold drop-shadow-md">Dublin</h1>
                    <h2 className="text-xl font-medium drop-shadow-md">123 properties</h2>
                </div>
            </div>

            <div className="relative text-white rounded-xl overflow-hidden h-[250px] flex-1 cursor-pointer shadow-lg transform hover:scale-105 hover:z-10 transition-all duration-300">
                <img
                    src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Austin"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5">
                    <h1 className="text-3xl font-bold drop-shadow-md">Austin</h1>
                    <h2 className="text-xl font-medium drop-shadow-md">532 properties</h2>
                </div>
            </div>

            <div className="relative text-white rounded-xl overflow-hidden h-[250px] flex-1 cursor-pointer shadow-lg transform hover:scale-105 hover:z-10 transition-all duration-300">
                <img
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Reno"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5">
                    <h1 className="text-3xl font-bold drop-shadow-md">Reno</h1>
                    <h2 className="text-xl font-medium drop-shadow-md">533 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
