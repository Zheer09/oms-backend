import express from "express";

import { createClientRouter } from "./controller/create_account";
import { getClientRouter } from "./controller/get_account";
import { uploadImage } from "./controller/upload_Image";
import { AppDataSource } from "./data-source"
import {createComplainForm} from "./controller/create_form";

//const awsConfig = require("./config-aws");
import { Accounts } from "./entity/accounts"
import { uploadFormImage } from "./controller/uploadForm_images";


const app = express();


AppDataSource.initialize().then(async () => {

try{

    app.use(express.json());

    app.use(createClientRouter);
    app.use(getClientRouter);
    app.use(uploadImage);
    app.use(createComplainForm);
    app.use(uploadFormImage);

    app.listen(8080, () => {
        console.log('Now running on port 8080');
    });
    
}catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
}

    
    

}).catch(error => console.log(error))


