// State fair food
// img: https://images.unsplash.com/photo-1505714628981-7273be3e2bd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3011;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/reserve", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    reservations.push(newReservation);
    
    res.json(newReservation);
    
    if (reservations.length < 5) {
        res.sendFile(path.join(__dirname, "reserve.html"));
        reservations.table = "Reserved";
    }
    else {
        alert("Tables are full! You have been added to the waitlist.");
        reservations.table = "Waitlist"
        res.sendFile(path.join(__dirname, "reserve.html"));
    }
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
