const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect(
  "mongodb+srv://chamanos:sc7431560@cluster0.expj7.mongodb.net/shopUI?retryWrites=true&w=majority"
)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.log(err);
  });


app.listen(5000, ()=>{
    console.log("Backend server is running")
})