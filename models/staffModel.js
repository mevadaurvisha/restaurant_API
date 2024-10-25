import mongoose from "mongoose";

const staffSchema  = new mongoose.Schema({

    fname : {
        type : String,
        required : true
    },
    lname :{
        type : String,
        required : true
    },
    staffRoleId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'staffRole'
    }
});

const staffModel = mongoose.model('staff', staffSchema);

export default staffModel;