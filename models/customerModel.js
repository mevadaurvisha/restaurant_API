import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({

    fname :{
        type : String,
        required : true
    },
    surname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    cellphoneNumber : {
        type : Number,
        required : true
    }
});

const customerModel = mongoose.model('customer', customerSchema);

export default customerModel;