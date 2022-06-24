"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const create_account_1 = require("./controller/create_account");
const get_account_1 = require("./controller/get_account");
const upload_Image_1 = require("./controller/upload_Image");
const data_source_1 = require("./data-source");
const create_form_1 = require("./controller/create_form");
const uploadForm_images_1 = require("./controller/uploadForm_images");
const update_form_1 = require("./controller/update_form");
const get_forms_1 = require("./controller/get_forms");
const delete_form_1 = require("./controller/delete_form");
const delete_image_1 = require("./controller/delete_image");
const edit_form_1 = require("./controller/edit_form");
const update_account_1 = require("./controller/update_account");
const get_numberDash_1 = require("./controller/get_numberDash");
const get_allForms_1 = require("./controller/get_allForms");
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use(create_account_1.createClientRouter);
        app.use(get_account_1.getClientRouter);
        app.use(upload_Image_1.uploadImage);
        app.use(create_form_1.createComplainForm);
        app.use(uploadForm_images_1.uploadFormImage);
        app.use(update_form_1.updateComplainimage);
        app.use(get_forms_1.geFormsRouter);
        app.use(delete_form_1.deleteForm);
        app.use(delete_image_1.deleteImage);
        app.use(edit_form_1.updateForm);
        app.use(update_account_1.updateAccount);
        app.use(get_numberDash_1.geAllRouter);
        app.use(get_allForms_1.geAllFormsRouter);
        app.listen(8080, () => {
            console.log('Now running on port 8080');
        });
    }
    catch (error) {
        console.error(error);
        throw new Error('Unable to connect to db');
    }
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map