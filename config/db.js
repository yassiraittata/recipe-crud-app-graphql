const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Db connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connect;
