import { User } from "./usermodel";

function addUser(req, res){
    let userDoc = new User(req.body);
    userDoc.save()
    .then((result)=>{
        console.log('user saved');
        res.status(201).json({Fname: result._Fname, url: `/Users/${result._Fname}`})
    })
    .catch((error)=> {
        res.status(412).json({status: 'fail', message: 'not created'})
    })
    console.log('Promising to save')
}

export default{addUser}