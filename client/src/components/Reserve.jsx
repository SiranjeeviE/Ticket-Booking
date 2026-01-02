import { useRef, useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { X, Check } from "lucide-react";

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { data, loading, error } = useFetch(
        `http://localhost:5000/api/hotels/room/${hotelId}`
    );
    const { dates } = useContext(SearchContext);
    const navigate = useNavigate();

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`http://localhost:5000/api/rooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) { }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg relative max-w-2xl w-full mx-4">
                <X
                    className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-black"
                    onClick={() => setOpen(false)}
                />
                <span className="block text-xl font-bold mb-6">Select your rooms:</span>
                <div className="flex flex-wrap gap-4 max-h-[60vh] overflow-y-auto">
                    {data.map((item) => (
                        <div className="w-full flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition" key={item._id}>
                            <div className="flex flex-col gap-1">
                                <div className="font-semibold text-lg">{item.title}</div>
                                <div className="text-gray-600 truncate max-w-xs">{item.desc}</div>
                                <div className="text-sm">
                                    Max people: <span className="font-bold">{item.maxPeople}</span>
                                </div>
                                <div className="font-bold text-lg text-primary-600">${item.price}</div>
                            </div>
                            <div className="flex flex-wrap gap-2 text-[8px] text-gray-400">
                                {item.roomNumbers.map((roomNumber) => (
                                    <div className="flex flex-col items-center" key={roomNumber._id}>
                                        <label className="text-xs mb-1 text-gray-700 font-medium">{roomNumber.number}</label>
                                        <input
                                            type="checkbox"
                                            value={roomNumber._id}
                                            onChange={handleSelect}
                                            disabled={!isAvailable(roomNumber)}
                                            className="w-4 h-4 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleClick}
                    className="w-full mt-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2"
                >
                    Reserve Now <Check size={20} />
                </button>
            </div>
        </div>
    );
};

export default Reserve;
