import express from 'express';
import { Forms } from '../entity/form';

const router = express.Router();

router.delete('/api/deleteForm/:formID', async (req, res) => {


        const{ formID} = req.params


        const respone = await Forms.delete({formId:parseInt(formID)});

        console.log(respone)

        

        if(respone.affected === 1){
        return res.json({msg: "deleted"},)
        }else{
            return res.json({msg: "Notdeleted"},)
        }


})

export { router as deleteForm };