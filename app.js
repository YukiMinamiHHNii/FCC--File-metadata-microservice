const express = require("express"),
			dotenv = require("dotenv").load(),
			fileAnalyseRouter = require("./src/routers/fileAnalyseRouter");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/views"));
app.use("/api/fileanalyse", fileAnalyseRouter);

app.listen(process.env.SERVER_PORT);

console.log(`App running on port ${process.env.SERVER_PORT}`);

//Multer can be used on multipart/form-data forms for everything else use bodyparser
