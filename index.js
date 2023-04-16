const express = require("express");
const bodyParser = require("body-parser");

const app = express();  
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book");
const cors = require("cors");
app.use(express.json());
app.use("/mangojelly/books",bookRoutes);

app.use(cors());
dotenv.config();
app.listen(process.env.PORT,()=>{
    console.log("Server created and running on "+`${process.env.PORT}`);
});

//db connection
//mongoose.set('strictQuery',true);
mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
        console.log("error is --> "+err);
})
