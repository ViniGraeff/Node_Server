module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/list-users', function(req, res){
	fs.readFile(__dirname+ '/../db/users.json', 'utf8', function(err, data){
		res.end(data);
	});
});

module.exports = router;