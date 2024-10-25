import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    
    menuDate :{
        type : String,
        required : true,
    }
});

const menuModel = mongoose.model('menu', menuSchema);

export default menuModel;