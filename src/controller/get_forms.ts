import express from 'express';
import { AppDataSource } from "../data-source";
import { Forms } from '../entity/form';

const router = express.Router();


router.get('/api/getForms/:userID', async (req, res) => {

    const { 
        userID,
        
    } = req.params;

    const forms = await AppDataSource.createQueryBuilder(Forms,'complainForm')
    .where("complainForm.userId = :userID" ,{userID})
    .getMany()

    if(!forms){
        res.json({msg: "noForm"})
    }


	return res.json(forms);

		
});

export { router as geFormsRouter };