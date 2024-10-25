import bookingModel from "../models/bookingModel.js";

export const postbooking = async (req, res) => {

    try {
        
        const {bookingDate, numberOfGuests, customerId, tableId} = req.body;

        if(!bookingDate || !numberOfGuests || !customerId || !tableId) {

            res.status(400).json({message : 'Please fill all the fields'});

        }

        const booking = await bookingModel({
            bookingDate, numberOfGuests, customerId, tableId
        });

        await booking.save();
        res.status(200).json(booking);
    
    }
    catch(err) {
        res.status(400).json({message : err.message});
    }
};