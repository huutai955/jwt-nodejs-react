import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();


const app = express();

// Config view engine
configViewEngine(app);


// Init web routes
initWebRoutes(app);


const PORT = process.env.PORT || 8080;
console.log(process.env.PORT);
app.listen(PORT, () => {
    console.log("JWT Backend is running");
})