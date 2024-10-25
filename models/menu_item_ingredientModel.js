import mongoose from "mongoose";

const menuItemIngredientSchema = new mongoose.Schema({

    itemQuentity : {
        type : Number,
        required : true
    },
    menuItemId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'menuItem'
    },
    ingredientId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ingredient'
    }
});

const menuItemIngredientModel = mongoose.model('menuItemIngredient', menuItemIngredientSchema);

export default menuItemIngredientModel;