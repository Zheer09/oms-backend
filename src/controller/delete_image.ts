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

router.put("/api/deleteImage/:userID/:formID", async (req, res) =>{

    
   const{
       userID,
       formID
   } = req.params

   const {images} = req.body;

    
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `User${userID}/`+ `Form${formID}/`+ images,
    };

    s3.deleteObject(s3Params, function(err, data){

        if (err) console.log(err, err.stack);
        else console.log(data);

        data = {
           
        };

        const returnData = {
            message: "objectDeleted"
        }

        return res.json(returnData);
    })
  
    
    return null;
  });

  export { router as deleteImage };


  