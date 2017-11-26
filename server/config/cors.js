var cors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
	if (req.method === "OPTIONS") 
		res.sendStatus(200);
	else 
		next();
}

module.exports = cors;