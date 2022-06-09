import express from "express";
import cors from 'cors';

import { createClientRouter } from "./controller/create_account";
import { getClientRouter } from "./controller/get_account";
import { uploadImage } from "./controller/upload_Image";
import { AppDataSource } from "./data-source"
import {createComplainForm} from "./controller/create_form";

//const awsConfig = require("./config-aws");
import { uploadFormImage } from "./controller/uploadForm_images";
import { updateComplainimage } from "./controller/update_form";
import { geFormsRouter } from "./controller/get_forms";
import { deleteForm } from "./controller/delete_form";
import { deleteImage } from "./controller/delete_image";
import { updateForm } from "./controller/edit_form";
import { updateAccount } from "./controller/update_account";
import { geAllRouter } from "./controller/get_numberDash";
import { geAllFormsRouter } from "./controller/get_allForms";


const app = express();


AppDataSource.initialize().then(async () => {

try{

    app.use(express.json());
    app.use(cors());
    app.use(createClientRouter);
    app.use(getClientRouter);
    app.use(uploadImage);
    app.use(createComplainForm);
    app.use(uploadFormImage);
    app.use(updateComplainimage);
    app.use(geFormsRouter);
    app.use(deleteForm);
    app.use(deleteImage);
    app.use(updateForm);
    app.use(updateAccount);
    app.use(geAllRouter);
    app.use(geAllFormsRouter);

    app.listen(8080, () => {
        console.log('Now running on port 8080');
    });
    
}catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
}

    
    

}).catch(error => console.log(error))


