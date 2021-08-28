import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Fname: {type: String, required: true},
    Lname: {type: String, required: true},
    Email: {type: String, required: true},
    Password:{ type: String, required: true}
})

let User = mongoose.model('User', UserSchema);

export {User}