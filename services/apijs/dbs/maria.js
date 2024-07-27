const mariadb = require('mariadb');
/*
- POST
UPLOAD_IMAGE: `${BASE_URL}/upload/${col}`,
EDIT: `${BASE_URL}/edit/[table]`,
SIGNUP: `${BASE_URL}/signup`,
NEWBOOK: `${BASE_URL}/newbook`,
LOOKUPSAVE: (type) => `${BASE_URL}/lookupsave/${type}`,
- GET
GET_BY_ID: (table,id) => `${BASE_URL}/${table}/${bookId}`,
LOGIN: `${BASE_URL}/login`,
BOOKUSER: `${BASE_URL}/bookuser`,
LOOKUP: (type) => `${BASE_URL}/lookup/${type}`,
GET_BOOKS_BY_LIB: (libid) => `${BASE_URL}/lib/${libid}`,
* */
module.exports = function(params,config){
	let action = params.type;
    var options={};
	let sql, pms = [];
console.log(params.type);
	if(params.type=='lookup') {
		sql = `SELECT name, id FROM ${params.col} WHERE name LIKE ? ORDER BY name`;
		pms = [`%${params.query.q}%`];
}else if(params.type=='savenew') {
		console.log(params)
		var col=params.col,key=params.body.key, value=params.body.value, id=params.body.id;
		sql = `INSERT INTO ${key} (name,edited) VALUES (${value},NOW()); `;
		sql += `UPDATE ${col} SET ${key} = LAST_INSERT_ID(), edited = NOW() WHERE id=?;`;
		pms=[key,value,id];
	}else if(params.type=='lookupsave') {
		console.log(params)
		var col=params.col,key=params.body.key, value=params.body.value, id=params.body.id;
		sql = `UPDATE ${col} SET ${key}=?,edited=NOW()  WHERE id=?`;
		pms=[value,id];
	}else if(params.type=='edit') {
		var col=params.col, key=params.body.key, value=params.body.value, id=params.body.id;
		sql = `UPDATE ${col} SET ${key}=?,edited=NOW() WHERE id=?`;
		pms=[value,id];
		console.log(sql);
		console.log(pms);
	}else if(params.type=='bookuser'){
		var bookid=params.bookid,libid=params.libid;
		sql = `INSERT INTO bookuser (bookid,libid) VALUES(?,?)`;
		pms=[bookid,libid];
	}else if(params.type=='newbook'){
		sql = `INSERT INTO book (created,edited) VALUES(NOW(),NOW())`;
		pms=[];
	}else if(params.type=='login'){
		var mail=params.mail,pass=params.pass;
		sql = `SELECT * FROM user WHERE mail=? AND pass=?`;
		pms=[mail,pass];

	}else if(params.type=='user'){
		sql = `SELECT *,COALESCE(CONCAT('https://vivalibro.com/media/', img), 'https://vivalibro.com/img/empty.png') as uri FROM user WHERE id=? `;
		pms=[params.col];
	}else if(params.type=='signup'){
		var mail=params.mail,pass=params.pass,name=params.name;
		sql = "INSERT INTO user (mail,name,pass) values (?,?,?)";
		pms= [mail, name,pass];
	}else if(params.type=='book'){
		sql = "SELECT book.*,COALESCE(CONCAT('https://vivalibro.com/media/', book.img), 'https://vivalibro.com/img/empty.png') as uri, writer.id as writerId,editor.id as editorId,book.id as bookId,writer.name as writername,cat.name as catname,editor.name as editorname FROM book " +
			"LEFT JOIN writer on writer.id=book.writer " +
			"LEFT JOIN editor on editor.id=book.editor " +
			"LEFT JOIN cat on cat.id=book.cat " +
			"WHERE book.id=? ";
		pms=[params.col];
	}else if(params.type=='writer'|| params.type=='editor' || params.type=='cat'){
		sql = "SELECT *, COALESCE(CONCAT('https://vivalibro.com/media/', img), 'https://vivalibro.com/img/empty.png') as uri FROM "+params.type+" WHERE id=? ";
		pms=[params.col];
	}else if(params.type=='lib'){
		var pagin=10, start=(parseInt(params.query.page) - 1) * pagin;
		var limit=`LIMIT ${start},${pagin}`
		if(params.query.q!='') {
			var q=params.query.q, page=params.query.page;
			sql = "SELECT book.*,COALESCE(CONCAT('https://vivalibro.com/media/', book.img), 'https://vivalibro.com/img/empty.png') as uri, " +
				"writer.id as writerId,editor.id as editorId,book.id as bookId,writer.name as writername,cat.name as catname,editor.name as editorname " +
				"FROM bookuser " +
				"LEFT JOIN book on book.id=bookuser.bookid " +
				"LEFT JOIN writer on writer.id=book.writer " +
				"LEFT JOIN editor on editor.id=book.editor " +
				"LEFT JOIN cat on cat.id=book.cat " +
				"WHERE bookuser.libid=? " +
				"AND (book.title LIKE ? " +
				"OR writer.name LIKE ? " +
				"OR editor.name LIKE ?) " +
				"GROUP BY book.id  ORDER BY book.edited DESC "+limit;
			pms=[1, `%${q}%`, `%${q}%`, `%${q}%`];
		}else{
			sql = "SELECT book.*,COALESCE(CONCAT('https://vivalibro.com/media/', book.img), 'https://vivalibro.com/img/empty.png') as uri," +
				"writer.id as writerId,editor.id as editorId,book.id as bookId,writer.name as writername,editor.name as editorname,cat.name as catname " +
				"FROM bookuser " +
				"LEFT JOIN book on book.id=bookuser.bookid " +
				"LEFT JOIN writer on writer.id=book.writer " +
				"LEFT JOIN editor on editor.id=book.editor " +
				"LEFT JOIN cat on cat.id=book.cat " +
				"WHERE bookuser.libid=? GROUP BY book.id ORDER BY book.edited DESC "+limit;
			pms=[params.col];
			console.log(sql)

		}
	}else {
		console.log("No query case")
	}
	//var prm=params.hasOwnProperty('prm') ? params.prm : [];
	console.log(config.maria)
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: "n130177!",
	database: config.maria,
	waitForConnections: true,
	connectionLimit: 1,
	queueLimit: 0,
	multipleStatements: true
});
const call = async function() {
	  let conn;
	  try {
		conn = await pool.getConnection();
		const response = await conn.query(sql,pms)
			conn.release()
		return response;
	  } catch (err) {
		throw err;
	  } finally {
		if(conn){conn.release();}
	  }
}
options[action]= function (callback) {		
		call().then(result => callback(result)).catch(err => callback(err));
}
return options;
};