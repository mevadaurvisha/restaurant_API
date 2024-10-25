import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({

    bookingDate :{
        type : Date,
        default : Date.now
    },
    numberOfGuests :{
        type : Number,
        required : true
    },
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'customer'
    },
    tableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'table'
    }

});

const bookingModel = mongoose.model('booking', bookingSchema);

export default bookingModel;