
var jwt = require('jsonwebtoken');


const SECRET_KEY = "Rahasia"
// const SECRET_KEY = process.env.SECRET_KEY_JWT
const encodeToken= (payload)=>{
  // console.log(payload,SECRET_KEY,"<<<< masuk jwt")
 return token = jwt.sign(payload, SECRET_KEY);
}
const decodeToken= (token)=>{
 return token = jwt.verify(token, SECRET_KEY);
}

module.exports = {encodeToken,decodeToken}