var express = require("express");
var app = express();
const mysql = require('mysql2/promise');
const config=require("./config.json");
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
// Count the machine's CPUs
const fs = require("fs"),util= require("util"),nik=require("./nik"),{promisify} = require("util"),{ exec } = require("child_process"),https = require('https'),path = require('path'),compression = require('compression'),bodyParser = require("body-parser");
const privateKey = fs.readFileSync('/etc/letsencrypt/live/'+config.domain+'/privkey.pem', 'utf8'),certificate = fs.readFileSync( '/etc/letsencrypt/live/'+config.domain+'/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
https.createServer(credentials, app).listen(config.httpsport, function(){console.log('listening on '+config.httpsport)});
cookieParser = require('cookie-parser');
app.use(express.static("public"));
const secretKey = 'nFdDOYLj9q';
function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, secretKey, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.use(compression());
app.use(cookieParser());
//app.use(bodyParser.urlencoded({limit: '300mb', extended: true}));
app.use(cors({credentials: true, origin: config.whitelist}));
//console.log(process.env.npm_package_version)

// Parse application/json
app.use(bodyParser.json({ limit: '300mb' }));
//A GET METHODS
app.get('/:type/:col', async (req,res,next) =>{ 	//auth(req,res);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
	res.header('Transfer-Encoding', 'chunked');
	res.header('Access-Control-Allow-Origin',req.get('origin'));
	res.header("Access-Control-Allow-Credentials", true);
	var bin="nikos13".toString();
	var authorization= new Buffer.from(bin).toString('base64');
	res.header("Authorization","Basic "+authorization);
	var type = req.params.type || '';
	var col = req.params.col || '';
	req.params.query=req.query;
	console.log(req.params)
	var ma = require("./dbs/maria")(req.params,config,nik);
	ma[type](function(data){
		if(type=='lookup') {
			var newarray = [];
			console.log(data.length)
			if(data.length>0){for (var i in data) {
				newarray[data[i].name] = data[i].id;
			}}
		//	console.log(newarray)
			res.json(newarray);
		}else {
			data = data == "" ? "NO" : data;
			console.log(data[0])
			res.status(200).json(data);

		}
		res.end();
	})
});
//B  POST METHODS
// Configure multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '/var/www/vivalibro/media');
	},
	filename: (req, file, cb) => {
		const uniqueName = path.basename(file.originalname);
		cb(null, uniqueName);
	},
});
const upload = multer({
	storage,
	limits: {
		fileSize: 10000000 // 10MB
	}
});
// Define your upload endpoint
app.post('/:type/:col/:img', upload.single('file'), async (req, res) => {

	//console.log("req.body")
	//console.log(req.body)
	//console.log("req.params")
	//console.log(req.params)
	//console.log('runnig POST UPLOAD')
// Create a connection to the database
	var type = req.params.type || '';
	var col = req.params.col || '';
	const db = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'n130177!',
		database: 'vivalibro'
	});
	console.log('Uploaded file:', req.file);
	try {
		const fileName = path.basename(req.body.img);
		const { table, id } = req.body;
		// Assuming you have your database connection setup
		const sql = `UPDATE ${col} SET img=? WHERE id = ?`;
		const params = [fileName, id];
		// Perform your database operation here
		// Replace with your actual database query execution
		const [data] = await db.execute(sql, [fileName, id]);

		// Return the uploaded file name and URI to the client
		data.uri=`https://vivalibro.com/media/${fileName}`
		console.log(data)
		if (data.affectedRows === 1) {
			res.status(200).send(data);
		} else {
			res.status(500).send({ error: 'Database update failed' });
		}
	} catch (error) {
		console.error('Error handling file upload:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
	res.end();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '300mb' }));

app.post('/:type', async (req, res) => {
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Content-Type','application/json');
//	res.header('Transfer-Encoding', 'chunked');
	res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.header('Access-Control-Allow-Origin', req.get('origin'));
	res.header("Access-Control-Allow-Credentials", true);
	const bin = ("nikos32").toString();
	const authorization = Buffer.from(bin).toString('base64');
	res.header("Authorization", "Basic " + authorization);
	var type = req.params.type || '';
//		console.log("POST one param");
//		console.log("POST -"+req.params.url);
	req.body.type=type;
//	console.log(req.body);
	var ma = require("./dbs/maria")(req.body,config,nik);
	ma[type](function(data) {
		if (type === 'upload') {
			//	console.warn(data)
			res.json(data);

		}else if(type=='bookedit' || type=='newbook' || type=='bookuser') {
//			console.warn(data)
			res.json(data);
		}else if(type=='signup'){
//			console.warn(data)
			res.json(data);
		}else if(type=='login'){
			console.log(data)
			const user = { name: data[0].id };
			// Generate a token

			const accessToken = jwt.sign(user, secretKey);
			var data = data == "" ? {reply:"NO"} : data[0];
//			console.warn(data[0])
			res.json(data);
		}else {
			data = data == "" ? "NO" : data;
//			console.warn(data)
			res.json(data[0]);
		}
		res.end();
	})
})

app.post('/:type/:col', async (req, res) => {
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Content-Type','application/x-www-form-urlencoded');
	res.header('Transfer-Encoding', 'chunked');
	res.header('Access-Control-Allow-Methods', 'GET,POST, OPTIONS');
	res.header('Access-Control-Allow-Origin',req.get('origin') );
	res.header("Access-Control-Allow-Credentials", true);
	var bin=(req.cookies['sid']+req.cookies['sp']).toString()
	var authorization= new Buffer.from(bin).toString('base64');
	res.header("Authorization","Basic "+authorization);
	var type = req.params.type || '';
	var col = req.params.col || '';
	console.log("POST -"+req.url);
// MONGO POST API ins insMany del set upsert delMany upMany fup 
	req.params.q=req.body.q;
	req.params.body=req.body;
	var ma = require("./dbs/maria")(req.params,config,nik);
	ma[type](function(data){
		var r=data.affectedRows==1 ?"OK":"NO";
		res.status(200).json(r);res.end();
	})
});
