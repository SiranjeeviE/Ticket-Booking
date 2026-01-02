import React, { useContext, useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar, MapPin, User } from 'lucide-react';

const Search = () => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        dispatch({ type: 'NEW_SEARCH', payload: { city: destination, dates, options } });
        navigate('/destinations', { state: { destination, dates, options } });
    };

    return (
        <div className="h-[60px] bg-white border border-gray-200 shadow-lg flex items-center justify-around py-3 rounded-md absolute -bottom-[30px] w-full max-w-5xl left-0 right-0 mx-auto z-10 px-4">
            {/* Destination */}
            <div className="flex items-center gap-3 w-1/4 relative">
                <MapPin className="text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-none outline-none text-gray-700 bg-transparent w-full placeholder-gray-400"
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-3 w-1/4 relative cursor-pointer" onClick={() => setOpenDate(!openDate)}>
                <Calendar className="text-gray-400" size={20} />
                <span className="text-gray-500 text-sm">
                    {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {openDate && (
                    <div className="absolute top-[50px] z-50 shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                        />
                    </div>
                )}
            </div>

            {/* Options */}
            <div className="flex items-center gap-3 w-1/4 relative cursor-pointer" onClick={() => setOpenOptions(!openOptions)}>
                <User className="text-gray-400" size={20} />
                <span className="text-gray-500 text-sm">
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                    <div className="absolute top-[50px] bg-white text-gray-500 rounded-md shadow-xl w-60 z-50 p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Adult</span>
                            <div className="flex items-center gap-3">
                                <button
                                    disabled={options.adult <= 1}
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white disabled:cursor-not-allowed rounded"
                                    onClick={() => handleOption('adult', 'd')}
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{options.adult}</span>
                                <button
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white rounded"
                                    onClick={() => handleOption('adult', 'i')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Children</span>
                            <div className="flex items-center gap-3">
                                <button
                                    disabled={options.children <= 0}
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white disabled:cursor-not-allowed rounded"
                                    onClick={() => handleOption('children', 'd')}
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{options.children}</span>
                                <button
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white rounded"
                                    onClick={() => handleOption('children', 'i')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Room</span>
                            <div className="flex items-center gap-3">
                                <button
                                    disabled={options.room <= 1}
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white disabled:cursor-not-allowed rounded"
                                    onClick={() => handleOption('room', 'd')}
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{options.room}</span>
                                <button
                                    className="w-8 h-8 border border-primary-500 text-primary-500 bg-white rounded"
                                    onClick={() => handleOption('room', 'i')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Button */}
            <div className="flex items-center gap-3">
                <button
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded transition-all"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
