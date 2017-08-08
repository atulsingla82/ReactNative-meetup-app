import express from 'express';
import dbconfig from './config/db';
import middlewareConfig from'./config/middleware';
import {MeetupRoutes} from './modules';

// Database
dbconfig();

const app = express();


// Middleware
middlewareConfig(app);

app.use('/api', [MeetupRoutes]);
const PORT = process.env.PORT || 3000;

app.listen(PORT, err=> {

if (err){

	console.error(err);
} {
	console.log(`App listening on port: ${PORT}`);
}
})