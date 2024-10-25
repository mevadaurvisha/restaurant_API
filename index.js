import express from "express";
const app = express();
import bodyParser  from "body-parser";
import db from "./config/db.js";
const port = 3003;
import routes from './routes/routes.js';


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/v1' , routes);

app.listen(port, (err) => {

    if(!err) {
        console.log(`server is running on http://localhost:${port}/v1`);
    }
})