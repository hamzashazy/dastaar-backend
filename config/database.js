const mongoose = require('mongoose')

const { DB_CON_STRING } = process.env

let conn = null;

module.exports = async () => {
  if (conn == null) {
    conn = mongoose.connect("mongodb+srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/?retryWrites=true&w=majority", {
      serverSelectionTimeoutMS: 5000
    }).then(() => mongoose);
    await conn;
  }
  return conn;
};