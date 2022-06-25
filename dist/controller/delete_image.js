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
exports.deleteImage = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const aws_config_1 = require("../aws-config");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.deleteImage = router;
aws_sdk_1.default.config.update({ region: aws_config_1.awsConfig.region });
const S3_BUCKET = aws_config_1.awsConfig.bucketName;
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: aws_config_1.awsConfig.accessKeyId,
    secretAccessKey: aws_config_1.awsConfig.secretAccessKey,
    region: aws_config_1.awsConfig.region,
    signatureVersion: "v4",
});
router.put("/api/deleteImage/:userID/:formID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, formID } = req.params;
    const { images } = req.body;
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: `User${userID}/` + `Form${formID}/` + images,
    };
    s3.deleteObject(s3Params, function (err, data) {
        if (err)
            console.log(err, err.stack);
        else
            console.log(data);
        data = {};
        const returnData = {
            message: "objectDeleted"
        };
        return res.json(returnData);
    });
    return null;
}));
//# sourceMappingURL=delete_image.js.map