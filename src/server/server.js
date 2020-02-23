const express = require("express")
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "sekret"}));




    app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Odwiedziles strone: " + req.session.page_views + " razy");
    } else {
        req.session.page_views = 1;
        res.send("Witamy po raz pierwszy");
    }
});


   


   /* app.get("/test", (req, res) => {
        console.log("test");
        //console.log(req);
        //console.log(res);
        res.send("testowa podstrona")
        }
    )*/

  /*  app.get("/test/:id/:id2", (req, res) => {
        console.log(req.params.id);
        res.send(`testowa podstrona z parametrem1: ${req.params.id} i parametrem2: ${req.params.id2}`)
        }
    )*/

    app.get("/test/:id", (req, res) => {
        const saveCookie = req.cookies.id === undefined ? "brak" : req.cookies.id;
        res.cookie("id", req.params.id, {expires: new Date(Date.now() + 900000)})
            .send(`Poprzedni parametr: ${saveCookie} Biezacy parametr: ${req.params.id}`);
        }
    )

//test
    app.get("*", (req, res) => res.send("brak wskazanego adresu"))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))