import { Room } from "./roommodel";
import {Booking} from './bookingmodel'

function readallRooms (req, res, options = []){
    console.log(req.query)
    const DateFrom = new Date(req.query.dateFrom.split('Z')[0])
    const DateTo = new Date(req.query.dateTo.split('Z')[0])
    const type = req.query.type

    

    Booking.find({ $and: [
        {"DateFrom": { "$gte": DateFrom, } }, 
        {"DateTo": { "$lte": DateTo } } 
    ]}, { Number: 1 }
    ).then((result) => {
        let query = { 
            Number: { "$nin": result.map(x => x.Number) }
        }

        if (type != "")
            query = {
                "Type": type,
                ...query
            }

        Room.find(query)
        .then((result)=>{
            console.log("Rooms found")
        res.json(result)})
        .catch((error)=> res.status(500).json({error: 'An error'}))
    })
}

function addRoom(req, res){
    let userDoc = new Room(req.body);
    userDoc.save()
    .then((result)=>{
        console.log('Room saved');
        res.status(201).json({Number: result._Number, url: `/rooms/${result._Number}`})
    })
    .catch((error)=> {
        res.status(412).json({status: 'fail', message: 'not created'})
    })
    console.log('Promising to save')
}

function addBooking(req, res){
    let BookingDoc = new Booking(req.body);
    BookingDoc.save()
    .then((result)=>{
        console.log('Booking  saved');
        res.status(201).json({Number: result._Number, url: `/booking/${result._Number}`})
    })
    .catch((error)=> {
        res.status(412).json({status: 'fail', message: 'not created'})
    })
    console.log('Promising to save')
}

function readAllBookings(req, res, options = []) {
    Booking.find()
    .then((result)=>{
        console.log("Bookings found")
    res.json(result)})
    .catch((error)=>
    res.status(500).json({error: 'An error'}))
    console.log("Finding Bookings")
}

function deletebooking(req, res) {
    console.log(req.body)
    Booking.deleteOne({"id": req.body._id}).then(x => {
        console.log("Deleted")
    })
}

export default { readallRooms, addRoom, addBooking, readAllBookings, deletebooking }