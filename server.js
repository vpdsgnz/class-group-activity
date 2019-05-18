const express = require("express");
const app = express();
const path = require ("path");
const PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data array
var customers = [
    
    {
        routeName = "alfred",
        customerName: "Alfred",
        phoneNumber: "3552003265",
        customerEmail: "alfred@some",
        customerID: "1"
    },
    {
        routeName = "raymond",
        customerName: "Raymond",
        phoneNumber: "7856666355",
        customerEmail: "raymond@some",
        customerID: "2"
    },
    {
        routeName = "tina",
        customerName: "Tina",
        phoneNumber: "98512663232",
        customerEmail: "tina@some",
        customerID: "3"
    }      
];

app.get("/", function(req, res) {
 res.send("we are the awesomeness alive");
});

// What does this route do?
app.get("/api/customers", function(req, res) {
    return res.json(customers);
  });


// What does this route do?
app.get("/api/customers/:customer", function(req, res) {
    // What does this code do?
    var chosen = req.params.customer;
    console.log(chosen);
  
    // What does this code do?
    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].routeName) {
        return res.json(customers[i]);
      }
    }
  
    // What does this code do?
    return res.send("No character found");
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });