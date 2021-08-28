import express from 'express'
import roomdb from '../Models/roomservice'
import db from '../Models/userservice';




const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//router.post('/id', (req, res)=> {
    //db.addUser(req, res);
//})

router.get('/readallrooms', (req, res)=> {
    roomdb.readallRooms(req,res)
})

router.post('/addRoom', (req, res)=>
{
    roomdb.addRoom(req, res)
})

router.post('/addBooking', (req, res)=>
{
    roomdb.addBooking(req, res)
})

router.get('/readallbookings', (req, res) => {
    roomdb.readAllBookings(req, res)
})

router.post('/deletebooking', (req, res) => {
    roomdb.deletebooking(req, res)
})
export default router;

//{
   // "id": "1",
    //"Type": "Single",
    //"Price": "300",
    //"Number": "15",
    //"DateFrom": "2021-07-22",
    //"DateTo": "2021-08-01"
 //}