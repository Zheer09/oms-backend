import express from 'express';
import { Accounts , accountType } from '../entity/accounts';
import { AppDataSource } from "../data-source";
import { Forms } from '../entity/form';

const router = express.Router();


router.post('/api/updateForm/:userID/:formID', async (req, res) => {

    const { 
        userID,
        formID
    } = req.params;

   const {
          images
            } = req.body;

    //  const accountID = await Accounts.findOneBy({id: parseInt(userID)})


    // const form = await Forms.findOneBy({formId: parseInt(formID), account: accountID!})

    const account = await AppDataSource.createQueryBuilder().update(Forms).set({formImages: images}).where("complainForm.userId = :userID" ,{userID})
    .andWhere("complainForm.formId = :formID",{formID}).execute()
    

	return res.json(account);

});

export { router as updateComplainimage };