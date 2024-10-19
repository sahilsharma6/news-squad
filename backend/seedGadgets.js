import mongoose from "mongoose";
import GadgetsModel from "./models/categoryModel.js";
import dummyData from "./data/Gadgets.js";
import readline from 'readline-sync'


mongoose.connect('mongodb://127.0.0.1:27017/new-squad-official',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((data)=>console.log('succeed')
).catch((err)=>console.log(err)
)

const opt=readline.question('Enter the operation name : ');

const Add=()=>{
GadgetsModel.insertMany(dummyData)
    .then(() => console.log("Dummy data inserted successfully"))
    .catch((err) => console.error("Error inserting dummy data:", err));
}

const del=()=>{
    const _id=readline.question('Enter the id: ')
    GadgetsModel.deleteOne({_id})
    .then((data)=>console.log('deleted ' ,data)
    ).catch((err)=>console.log('errr')
    )
}

switch (opt) {
    case 'add':
        Add()
        break;
    case 'del':
        del()
        break;

    default:
        break;
}