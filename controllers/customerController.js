import customerModel from "../models/customerModel.js";

export const postCustomer = async (req, res) => {

    try {

        const {fname, surname, phoneNumber, cellphoneNumber, email} = req.body;

        if(!fname || !surname || !phoneNumber || !cellphoneNumber || !email) {

            res.status(400).json({message : 'Please fill all the fields'});
        }

        const customer = await customerModel({

            fname, surname, phoneNumber, cellphoneNumber, email
        });

        await customer.save();
        res.status(200).json(customer);

    } catch(err) {
        res.status(400).json({message : err.message});
    }
}

export const getCustomer = async (req, res) => {
    
    try{
        const customer = await customerModel.find();
        res.status(200).json(customer);
    }
    catch(err) {
        res.status(400).json({message : err.message});
    }
}