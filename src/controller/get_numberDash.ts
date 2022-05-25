import express from 'express';
import { Accounts } from '../entity/accounts';
import { AppDataSource } from "../data-source";
import { Forms } from '../entity/form';

const router = express.Router();


router.get('/api/getAllacc', async (req, res) => {

    // const { 
    //     userID,
        
    // } = req.params;


    const account = await AppDataSource.createQueryBuilder(Accounts,'account')
    .getMany()

    if(!account){
        res.json({msg: "noForm"})
    }


	return res.json(account);

		
});

export { router as geAllRouter };