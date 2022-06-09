import express from 'express';
import { AppDataSource } from "../data-source";
import { Forms } from '../entity/form';

const router = express.Router();


router.get('/api/getallForms', async (req, res) => {


    const forms = await AppDataSource.createQueryBuilder(Forms,'complainForm').leftJoinAndSelect("complainForm.account","account")
    .getMany()




    if(!forms){
        res.json({msg: "noForm"})
    }


	return res.json(forms);

		
});

export { router as geAllFormsRouter };