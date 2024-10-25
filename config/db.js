import mongoose from "mongoose";

const db = mongoose.connect('mongodb+srv://urvishamevada90:AKrvXSWJcPbTenVm@cluster0.o7u6x.mongodb.net/restaurant_API').then((res) => {
    console.log('DB Connected');
}).catch((err) => {
    console.log('database err' , err);
})

export default db;