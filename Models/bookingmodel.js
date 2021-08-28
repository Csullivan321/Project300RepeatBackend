import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
    id : {type: Number, required: true},
    Type: {type: String, requied : true},
    Price: {type: Number, requied: true},
    Number: {type: Number, requied: true},
    DateFrom: {type: Date, requied: true},
    DateTo:{type: Date, required: true},
    Email:{type: String, required: true}
})

let Booking = mongoose.model('Booking', BookingSchema);

export{Booking}