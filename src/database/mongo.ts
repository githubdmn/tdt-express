
import {connect, disconnect} from 'mongoose';
import dev from '../config';

const dblink = `mongodb+srv://${dev().mongo_username}:${dev().mongo_password}@${dev().mongo_server}/${dev().mongo_name}`;

const mongo_connect = async() => await connect(dblink, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const mongo_disconnect = async() => await disconnect();

module.exports.dblink = dblink;
module.exports.mongo_connect = mongo_connect;
module.exports.mongo_disconnect = mongo_disconnect;

