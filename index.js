// set up express
const express = require ("express");
const app = express();
const port = 8081;

// Set up the body parser
app.use(express.urlencoded({extended: true}))

// load the routes handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// start listening for HTTP requests
app.listen(port, () => console.log((`Node server is running on port ${port}...`)))