import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../components/SearchItem';
import useFetch from '../hooks/useFetch';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination || '');
    const [dates, setDates] = useState(location.state?.dates || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options || { min: 1, max: 999, adult: 1, children: 0, room: 1 });
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

    return (
        <div className="flex justify-center mt-5">
            <div className="w-full max-w-7xl flex gap-5 px-4">
                {/* Search Sidebar */}
                <div className="flex-1 bg-yellow-500 p-3 rounded-lg sticky top-3 h-max dark:bg-yellow-600">
                    <h1 className="text-xl text-gray-700 font-bold mb-3 dark:text-white">Search</h1>
                    <div className="flex flex-col gap-2 mb-3">
                        <label className="text-xs text-gray-800 dark:text-gray-100">Destination</label>
                        <input
                            type="text"
                            placeholder={destination}
                            className="h-8 border-none p-1 text-gray-900"
                            onChange={e => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label className="text-xs text-gray-800 dark:text-gray-100">Check-in Date</label>
                        <span
                            className="h-8 p-1 bg-white flex items-center cursor-pointer text-sm text-gray-600"
                            onClick={() => setOpenDate(!openDate)}
                        >
                            {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && (
                            <DateRange
                                onChange={(item) => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
                                className="w-full"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label className="text-xs font-bold text-gray-800 dark:text-gray-100">Options</label>
                        <div className="p-2">
                            <div className="flex justify-between mb-2 text-xs text-gray-800 dark:text-gray-100">
                                <span>Min price <small>per night</small></span>
                                <input type="number" onChange={e => setMin(e.target.value)} className="w-12 border border-gray-300 rounded p-1 text-gray-900" />
                            </div>
                            <div className="flex justify-between mb-2 text-xs text-gray-800 dark:text-gray-100">
                                <span>Max price <small>per night</small></span>
                                <input type="number" onChange={e => setMax(e.target.value)} className="w-12 border border-gray-300 rounded p-1 text-gray-900" />
                            </div>
                            <div className="flex justify-between mb-2 text-xs text-gray-800 dark:text-gray-100">
                                <span>Adult</span>
                                <input type="number" min={1} className="w-12 border border-gray-300 rounded p-1 text-gray-900" placeholder={options.adult} />
                            </div>
                            <div className="flex justify-between mb-2 text-xs text-gray-800 dark:text-gray-100">
                                <span>Children</span>
                                <input type="number" min={0} className="w-12 border border-gray-300 rounded p-1 text-gray-900" placeholder={options.children} />
                            </div>
                            <div className="flex justify-between mb-2 text-xs text-gray-800 dark:text-gray-100">
                                <span>Room</span>
                                <input type="number" min={1} className="w-12 border border-gray-300 rounded p-1 text-gray-900" placeholder={options.room} />
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-full bg-primary-600 text-white font-medium p-2 cursor-pointer rounded hover:bg-primary-700 transition"
                        onClick={() => reFetch()} // Trigger re-fetch
                    >
                        Search
                    </button>
                </div>

                {/* Search Results */}
                <div className="flex-[3]">
                    {loading ? (
                        "Loading..."
                    ) : (
                        <>
                            {data.map((item) => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
