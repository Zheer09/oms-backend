import express from 'express';
import { Accounts , accountType } from '../entity/accounts';
import { AppDataSource } from "../data-source";

const router = express.Router();


router.get('/api/getreg/:emailaddress/', async (req, res) => {

    const { 
        emailaddress,
    } = req.params;

    const account = await AppDataSource.createQueryBuilder(Accounts,'account')
    .where("account.emailaddress = :emailaddress" ,{emailaddress})
    .getOne()

    if(!account){
        res.json({msg: "invalidacc"})
    }


	return res.json({msg: "valid"});

		
});

export { router as getClientRouter };