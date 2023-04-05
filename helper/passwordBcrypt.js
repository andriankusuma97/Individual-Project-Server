const bcrypt = require('bcryptjs');

function hashPassword (password1){
  let salt = bcrypt.genSaltSync(8);
  let hash = bcrypt.hashSync(password1, salt);
  return hash
}

function checkPassword (password,checkPassword){
  const passwordValidate = bcrypt.compareSync(password, checkPassword)
  return passwordValidate
}

module.exports = {hashPassword,checkPassword}