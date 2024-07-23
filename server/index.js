
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/userr");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}));

// Define the Connection function
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-8ajmqqb-shard-00-00.kvyyywi.mongodb.net:27017,ac-8ajmqqb-shard-00-01.kvyyywi.mongodb.net:27017,ac-8ajmqqb-shard-00-02.kvyyywi.mongodb.net:27017/?tls=true&replicaSet=atlas-nh6hbi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

// Call the Connection function with your MongoDB username and password
// Note: Replace 'yourUsername' and 'yourPassword' with your actual MongoDB username and password
Connection('user', 'codeforinterview').then(() => {
    // Setup routes
    app.use("/auth", router);

    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.error('Database connection failed', error));