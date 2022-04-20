import AWS from "aws-sdk";
import { awsConfig } from "../aws-config";
import express from 'express';

const router = express.Router();

AWS.config.update({ region: awsConfig.region });

const S3_BUCKET = awsConfig.bucketName;
const s3 = new AWS.S3({
accessKeyId: awsConfig.accessKeyId,
secretAccessKey: awsConfig.secretAccessKey,
region: awsConfig.region,
signatureVersion: "v4",
});

router.post("/api/uploadImage", async (req, res) =>{

    
    let fileType = req.body.fileType;
    let userID = req.body.id;
    let fileName =req.body.fileName;
    if (fileType != ".jpg" && fileType != ".png" && fileType != ".jpeg") {
      return res
        .status(403)
        .json({ success: false, message: "Image format invalid" });
    }
  
    fileType = fileType.substring(1, fileType.length);

    fileName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
    
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `User${userID}/`+ fileName + "." + fileType,
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
        downloadUrl:
          `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}` + "." + fileType,
      };
      return res.status(200).json(returnData);
    });
    return null;
  });

  export { router as uploadImage };


  