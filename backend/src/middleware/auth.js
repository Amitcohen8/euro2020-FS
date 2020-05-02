const jwt = require('jsonwebtoken')
const User = require('../models/user')


// const auth = async (req,res,next)=>{
// try{
// const token = req.header('Authorization').replace('Bearer ','')
// const decoded = jwt.verify(token,'eurogameisfun')
// const user = await User.findOne({_id:decoded._id,'tokens.token':token})

// if(!user){
//     throw new Error()
// }
// req.token = token
// req.user = user
// next()
// console.log(token)
// }catch(e){
//     res.status(401).send({error:'Please authenticate.'})
// }
// }


const withAuth = (req,res,next)=>{
console.log('3',req.cookies)
    const token = req.cookies.token;
    if(!token){
        res.status(401).send('Unautorized: No token provided!')
    } else {
        jwt.verify(token,'eurogameisfun', function(err, decoded) {
            if (err) {
              res.status(401).send('Unauthorized: Invalid token');
            } else {
              req.email = decoded.email;
              next();
            }
          });
        }
    }


module.exports = withAuth 