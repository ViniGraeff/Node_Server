var fs = require('fs');
module.exports = {
	read: function(callback){
		fs.readFile(__dirname + "/../"+ "db/users.json", "utf8", function(err, data){
			if(err)
				return console.log(err);
			data = JSON.parse(data);
			callback(data);
		});
	},
	write: function(dataJson, res){
		fs.writeFile(__dirname + "/../"+ "db/users.json", dataJson, function(err){
			if(err)
				return console.log(err);
			res.json({'msg':'Usuário inserido com sucesso!'});
		});
	},

	check: function(text, params){
		var igual=0;
		for(var i=0;i<text.length;i++){
			if(params.name.toLowerCase()===text[i].name.toLowerCase() && params.email.toLowerCase()===text[i].email.toLowerCase()){
				igual=1;
			}

		}
		return igual;
	}
}