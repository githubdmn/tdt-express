
import dev from './config'
import { dblink, mongo_connect } from './database'

console.log(dev());
console.log(dblink);

mongo_connect()
	.then(() => console.log('successfully connected to mongodb'))
	.catch(() => console.log('unsuccessfully connected to mongodb'))


