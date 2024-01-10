const express = require("express");
const app = express();
const path = require("path");

const port = 3020;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.send("this is home");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:user",(req, res) => {
    let{ user} = req.params;
    const instaData = require("./data.json");
    // console.log(instaData)
    const data = instaData[user];
    console.log(data)
    res.render("insta.ejs",{ data });
});

app.get("/rolldice", (req, res) => {
    diceval = Math.floor(Math.random() * 6 ) + 1 ;// suppose data from database
    res.render("rolldice",{ num : diceval});
});

app.get("/rolloop", ( req, res) => {
    diceValue = Math.floor(Math.random() * 6 ) + 1 ;// suppose data from database
    res.render("rolloop",{ num : diceValue});

});




app.get("/:username", (req, res) => {
    let {username} = req.params
    // console.log(username)
    res.render("instagram", {username})

});

app.get("/:users", (req, res) => {
    let {users} = req.params;
    console.log(users);
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});