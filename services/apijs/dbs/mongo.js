/*
MONGO API 2
??? UDPATED WITH CHANNEL N (counters) incr decr
@s for db/collection @q params [s.type=m(ongo),s.name='',s.col=activity]
@actions: get | query | N(for pubsub) counters
params 
@order - desc- asc+ 
@limit 
@params has switch cases 
eg- activity: GET m/dev1/activity {uid: SPID, order: "status-"}
s.q.uid=SPID,s.q.order=status-
@cols return all collections
cli auth mongodump -d spd6 -u nikosd --authenticationDatabase admin
cols with fn 
*/
const mongo=require('mongodb'),MongoClient= mongo.MongoClient;

module.exports = function(params,config,nik){
var options={};
const call = async function () {
    let client;
	params.q={};
    try {		
        client = await MongoClient.connect(config.mongoconnect);
        const db = client.db(); 
		//delete params.col;
		if(params.col=="ins"){
		var response = await db.collection(params.col).insertOne(JSON.parse(params.q.set));
		}else if(params.col=="insMany"){
		var response = await db.collection(params.col).insertMany(JSON.parse(params.q.set));
		}else if(params.col=="bulk"){
		  var response = await db.collection(params.col).initializeOrderedBulkOp();
		   response.insert(JSON.parse(params.set));
		}else if(params.col=="set"){
		var response = await db.collection(params.col).updateOne(JSON.parse(params.q.where),{$set:JSON.parse(params.q.set)});
		
		}else if(params.col=="fup"){ //also use $unset:
		//example: s.api.mo.fup("chat",{cid:mes.cid},{$push: {chat: {"u": who, "c": mes.c, "t": mes.time}},$inc:{total:1},$inc:{[unread]:1}})							
		var where=JSON.parse(params.q.where);
		var set=JSON.parse(params.q.set);
		if(Object.keys(where)[0]=="_id"){var id=Object.values(where)[0];where={};where["_id"]=new mongo.ObjectID(id)}
		var response = await db.collection(params.key).findOneAndUpdate(where,set,{new:true,upsert: true});
					
		}else if(params.col=="upsert"){ //use instead of fup to create new document if not exist $set necessary		//example:s.api.mo.up("chat",{uid:2},{$set:{cid:mes.cid,uid1:mes.uid1,uid2:mes.uid2},$push:{chat: {"u": who, "c": mes.c, "t": mes.time}},$inc:{total:1},$inc:{[unread]:1}})
		var where=JSON.parse(params.q.where);
		var set=JSON.parse(params.q.set);
		if(Object.keys(where)[0]=="_id"){var id=Object.values(where)[0];where={};where["_id"]=new mongo.ObjectID(id)}
		var response = await db.collection(params.key).updateOne(where,set,{upsert:true});
			
		}else if(params.col=="upMany"){
		var response = await db.collection(params.key).updateMany(JSON.parse(params.q.where),JSON.parse(params.q.set),{upsert:true});
			
		}else if(params.col=="del"){
		var response = await db.collection(params.key).deleteOne(params.q)
		
		}else if(params.col=="delMany"){
		var response = await db.collection(params.key).deleteMany(params.q)
		
		}else if(params.col=="cols"){ //getting all collections
		var response = await db.listCollections().toArray();
		
		}else if(params.col=="getOne"){
		var response = await db.collection(params.key).findOne(nik.mogetparams(params.q,mongo));
		if(s.col=='form' && response!=null){ delete response._id;delete response.name;}	
	
		}else if(params.col=="agg"){
		var set=[JSON.parse(params.q.set)];
		var response = await db.collection(params.key).aggregate(set).toArray();
		}else if(params.col=="count"){
		var response = await db.collection(params.key).find(nik.mogetparams(params.q,mongo)).count();
		}else if(params.col=="get"){
			let limit = params.q.hasOwnProperty('limit') ? parseInt(params.q.limit) : 0; //ok
			let sort = params.q.hasOwnProperty('order') && params.q.order.slice(-1) === '-' ? -1 : +1; // ok
			let order = params.q.hasOwnProperty('order') ? {[params.q.order.slice(0, -1)]: sort} : {};    //ok
			let page = params.q.hasOwnProperty('page') ? parseInt(params.q.page) : 1;
			let skip = limit * (page - 1);	//ok 
			delete params.q.limit;delete params.q.order;delete params.q.page;
			let find=nik.mogetparams({mid:params.id},mongo);
			console.log(find)
			var response = await db.collection(params.key).find({mid:params.id}).skip(skip).limit(limit).sort(order).toArray();
		}		
        client.close();
        return response;
    } catch (err) {
        (client) && client.close();
        console.log(err);
        throw err
    }
};  

options[params.col]= function (callback) {
	call().then(result => {
		console.log(result);
		callback(result);
	}).catch(err => callback(err));
	}		
return options;
}