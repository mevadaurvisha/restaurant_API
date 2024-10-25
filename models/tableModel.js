import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    tableNumber : {
        type : String,
        required : true
    },
    tableDetails :{
        type : String,
        required : true
    }
});

const tableModel = mongoose.model('table', tableSchema);

export default tableModel;