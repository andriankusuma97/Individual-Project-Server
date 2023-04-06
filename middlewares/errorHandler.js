
module.exports = (error,request,response,next)=>{
  let status = 500
  let message = "Internal Server Error"

  switch (error.name) {
    case "JsonWebTokenError":
    case "invalidToken":
      status = 401
      message = "Invalid Token"
      break;
    case "MissingToken":
      status = 400
      message = "acces_token in headers is required"
      break;
    case "NotFound":
      status = 404
      message = "Data is Not Found"
      break;
    case "Frobidden":
      status = 403
      message = "your not allowed"
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      status = 400
      message = message = error.errors.map(el=>el.message)
      break;
    case "invalid email/password":
      status = 401
      message = "invalid email/password"
      break;
    case "already_subscribed":
      status = 404
      message = "Tou already subscribee"
      break;
    default:
      break;
  }


  response.status(status).json({message})
}


