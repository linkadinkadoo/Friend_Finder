
module.exports = function(app) {

// provides JSON
app.get("/api/friends", function(req, res) {
   // testing the .get
    res.send('test');
  });
  
  // Create New entry - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    console.log(newFriend);
  
    res.json(newFriend);
  });

}