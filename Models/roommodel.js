import { Int32 } from 'bson';
import mongoose from 'mongoose'
import roomservice from './roomservice';

const roomSchema = new mongoose.Schema({
    Type: {type: String, requied : true},
    Price: {type: Number, requied: true},
    Number: {type: Number, requied: true}

})

let Room = mongoose.model('Room', roomSchema);

export{Room}



