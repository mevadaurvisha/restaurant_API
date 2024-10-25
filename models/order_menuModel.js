import mongoose from "mongoose";
import { type } from "os";

const orederMenuItemSchema = new mongoose.Schema({

    orederMenuItemQuentity : {
        type : Number,
        required : true
    },
    orderMenuItemComments : {
        type : String,
        required : true
    },
    orderId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'order'
    },
    menuItemId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'menuItem'
    }
});

const orderMenuItemModel = mongoose.model('orderMenuItem', orederMenuItemSchema);

export default orderMenuItemModel;