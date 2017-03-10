var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');
var text;

router.post('/add-users', function(req, res){
	file.read(function(data){
		var params = req.query;
		var text = data;
		// id = text.length + 1;
		// params+= id;
		igual = file.check(text, params);

		if (igual==0){
			data.push(params);
			var dataJson = JSON.stringify(data);
			file.write(dataJson, res);
		}

		else{
			res.send('Usuário já existente');
			igual=0;
		}
	});
});

module.exports = router;