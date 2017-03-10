var express = require('express');
var router = express.Router();

router.get('/products', function(req, res){
	res.json({
		products:[
			{
				"id":1,
				"name":"pão",
				"valor":3,
				"status":"A",
				"estoque":"37"
			},
			{
				"id":2,
				"name":"batata",
				"valor":12,
				"status":"I",
				"estoque":"2"
			}
		]

	});
});

module.exports = router;