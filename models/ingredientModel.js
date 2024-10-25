import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({

    ingredientName : {
        type : String,
        required : true
    },
    ingredientTypeId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ingredientType'
    }
});

const ingredientModel = mongoose.model('ingredient', ingredientSchema);

export default ingredientModel;