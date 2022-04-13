import express from "express";

import { createClientRouter } from "./controller/create_account";
import { getClientRouter } from "./controller/get_account";
import { uploadImage } from "./controller/upload_Image";
import { AppDataSource } from "./data-source"

//const awsConfig = require("./config-aws");
import { Accounts } from "./entity/accounts"
import { User } from "./entity/User"

const app = express();


AppDataSource.initialize().then(async () => {

try{

    app.use(express.json());

    app.use(createClientRouter);
    app.use(getClientRouter);
    //app.use(uploadImage);

    app.listen(8080, () => {
        console.log('Now running on port 8080');
    });
    
}catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
}

    
    

}).catch(error => console.log(error))


