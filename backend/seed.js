import mongoose from "mongoose";
import dotenv from "dotenv";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

dotenv.config();

const hotels = [
    {
        name: "Hotel Westminster",
        type: "hotel",
        city: "london",
        address: "123 Westminster Road",
        distance: "500",
        photos: [
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcd939366048749f63f72e503f3380c255582f155cae35f9edbffdd78&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        ],
        title: "Best Hotel in London",
        desc: "Located in the heart of London, this hotel offers huge rooms and great service.",
        rating: 4.8,
        cheapestPrice: 150,
        featured: true,
    },
    {
        name: "Madrid City Center Hotel",
        type: "hotel",
        city: "madrid",
        address: "Plaza Mayor 1",
        distance: "100",
        photos: ["https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1"],
        title: "Experience Madrid",
        desc: "A wonderful stay in the center of Madrid.",
        rating: 4.5,
        cheapestPrice: 90,
        featured: true,
    },
];

const rooms = [
    {
        title: "Standard King (Westminster)",
        price: 150,
        maxPeople: 2,
        desc: "King size bed, city view.",
        roomNumbers: [{ number: 101 }, { number: 102 }, { number: 103 }],
    },
    {
        title: "Double Room (Madrid)",
        price: 90,
        maxPeople: 2,
        desc: "Cozy double room.",
        roomNumbers: [{ number: 201 }, { number: 202 }],
    },
];

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/explore-ease');
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

const seed = async () => {
    try {
        await connect();


        await Hotel.deleteMany();
        await Room.deleteMany();
        console.log("Cleared existing Hotels and Rooms.");


        const createdRooms = await Room.insertMany(rooms);
        const londonRoomId = createdRooms[0]._id;
        const madridRoomId = createdRooms[1]._id;


        hotels[0].rooms = [londonRoomId];
        hotels[1].rooms = [madridRoomId];

        await Hotel.insertMany(hotels);

        console.log("Data seeded successfully!");
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
};

seed();
