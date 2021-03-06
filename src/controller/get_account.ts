import express from 'express';
import { Accounts  } from '../entity/accounts';
import { AppDataSource } from "../data-source";

const router = express.Router();


router.get('/api/getAcc/:emailaddress/:password', async (req, res) => {

    const { 
        emailaddress,
        password 
    } = req.params;

    const account = await AppDataSource.createQueryBuilder(Accounts,'account')
    .where("account.emailaddress = :emailaddress" ,{emailaddress})
    .andWhere("account.password = :password",{password})
    .getOne()

    if(!account){
        return res.json({msg: "invalidacc"})
    }


	return res.json(account);

		
});

export { router as getClientRouter };