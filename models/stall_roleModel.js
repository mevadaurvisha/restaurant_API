import mongoose from "mongoose";

const staffRoleSchema = new mongoose.Schema({

    role :{
        type : String,
        required : true
    },
    roleDescription : {
        type : String,
        required : true
    }
});

const staffRoleModel = mongoose.model('staffRole', staffRoleSchema);

export default staffRoleModel;