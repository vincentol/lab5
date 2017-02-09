var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
  var newName = req.query.name;
  var newDescription = req.query.description;
  console.log(newName);
  console.log(newDescription);
  var newFriend = { name: newName,
    description: newDescription,
    imageURL: 'http://lorempixel.com/400/400/people' }
  console.log(newFriend);
  data.friends.push(newFriend);
  res.render('index', data);
 }
