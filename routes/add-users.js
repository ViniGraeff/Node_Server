var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');

router.post('/add-users', function(req, res){
	file.read(function(data){
		var params = req.query;
		var text = data;
		var id = text.length + 1;
		Object.defineProperty(params, "id", {
			get: function () { return id; },
			set: function (value) { id = value; },
			enumerable: true
		});
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