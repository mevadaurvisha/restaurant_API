import mongoose from "mongoose";
import { type } from "os";

const menuItemSchema = new mongoose.Schema({

    itemDescription :{
        type : String,
        required : true
    },
    itemPrice : {
        type : Number,
        required : true
    },
    menuId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'menu'
    }
});

const menuItemModel = mongoose.model('menuItem', menuItemSchema);

export default menuItemModel;