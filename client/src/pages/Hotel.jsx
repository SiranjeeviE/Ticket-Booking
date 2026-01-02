import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin } from 'lucide-react';
import useFetch from '../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import Reserve from '../components/Reserve';

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/find/${id}`);


    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        if (!date1 || !date2) return 0;
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = (dates && dates[0]) ? dayDifference(dates[0].endDate, dates[0].startDate) : 0;

    const navigate = useNavigate();

    const handleClick = () => {
        setOpenModal(true);
    };

    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full max-w-7xl px-4 flex flex-col gap-4 relative">
                        <button className="absolute top-2 right-4 bg-primary-600 text-white font-bold py-2 px-5 rounded cursor-pointer hover:bg-primary-700 transition" onClick={handleClick}>Reserve or Book Now!</button>
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin size={16} />
                            <span>{data.address}</span>
                        </div>
                        <span className="text-primary-600 font-medium">
                            Excellent location – {data.distance}m from center
                        </span>
                        <span className="text-green-600 font-medium">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>

                        <div className="flex flex-wrap justify-between gap-1">
                            {data.photos?.map((photo, i) => (
                                <div className="w-[32%]" key={i}>
                                    <img
                                        onClick={() => { setSlideNumber(i); setOpen(true); }}
                                        src={photo}
                                        alt=""
                                        className="w-full object-cover cursor-pointer hover:opacity-90 leading-none block"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between gap-5 mt-5">
                            <div className="flex-[3] bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h1 className="text-2xl font-bold mb-3">{data.title}</h1>
                                <p className="text-sm text-gray-600 leading-relaxed mt-5">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="flex-1 bg-primary-50 p-5 rounded-lg flex flex-col gap-5 shadow-sm">
                                <h1 className="text-xl font-bold text-gray-700">Perfect for a {days}-night stay!</h1>
                                <span className="text-sm text-gray-600">
                                    Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                                </span>
                                <h2 className="font-bold flex items-center justify-between">
                                    <span className="text-2xl text-gray-800"><b>${days * data.cheapestPrice * (options?.room || 1)}</b> ({days} nights, {options?.room || 1} room)</span>
                                </h2>
                                <button onClick={handleClick} className="bg-primary-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-primary-700 transition">Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
                </div>
            )}
        </div>
    );
};

export default Hotel;
