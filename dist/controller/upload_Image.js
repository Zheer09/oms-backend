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
exports.uploadImage = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const aws_config_1 = require("../aws-config");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.uploadImage = router;
aws_sdk_1.default.config.update({ region: aws_config_1.awsConfig.region });
const S3_BUCKET = aws_config_1.awsConfig.bucketName;
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: aws_config_1.awsConfig.accessKeyId,
    secretAccessKey: aws_config_1.awsConfig.secretAccessKey,
    region: aws_config_1.awsConfig.region,
    signatureVersion: "v4",
});
router.post("/api/uploadImage", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let fileType = req.body.fileType;
    let userID = req.body.id;
    let fileName = req.body.fileName;
    if (fileType != ".jpg" && fileType != ".png" && fileType != ".jpeg") {
        return res
            .status(403)
            .json({ success: false, message: "Image format invalid" });
    }
    fileType = fileType.substring(1, fileType.length);
    fileName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: `User${userID}/` + fileName + "." + fileType,
        Expires: 60 * 60,
        ContentType: "image/" + fileType,
        ACL: "public-read",
    };
    s3.getSignedUrl("putObject", s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            success: true,
            message: "Url generated",
            uploadUrl: data,
            downloadUrl: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}` + "." + fileType,
        };
        return res.status(200).json(returnData);
    });
    return null;
}));
//# sourceMappingURL=upload_Image.js.map