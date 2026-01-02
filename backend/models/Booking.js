import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
    {
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Room',
                required: true,
            },
        ],
        dates: {
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'confirmed', 'cancelled'],
        },
    },
    { timestamps: true }
);

export default mongoose.model('Booking', BookingSchema);
