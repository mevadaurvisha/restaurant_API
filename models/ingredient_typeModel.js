import mongoose from 'mongoose';

const ingredientTypeSchema = new mongoose.Schema({

    ingredientCode :{
        type : String,
        required : true
    },
    ingredientDescription :{
        type : String,
        required : true
    }
});

const ingredientTypeModel = mongoose.model('ingredientType', ingredientTypeSchema);

export default ingredientTypeModel;