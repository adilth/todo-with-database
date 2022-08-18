const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(process.env.CONNECT_DB, () =>
      console.log("Connect to DB")
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
