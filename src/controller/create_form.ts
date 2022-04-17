import express from 'express';
import { Accounts , accountType } from '../entity/accounts';
import { AppDataSource } from "../data-source";
import { Forms } from '../entity/form';

const router = express.Router();


router.post('/api/createForm/:userID', async (req, res) => {

    const { 
        userID
    } = req.params;

   const {title ,
          department,
          issueType,
          location,
          description,
          images,
          status
            } = req.body;



    const accountID = await Accounts.findOneBy({id: parseInt(userID)})
            
    if(!accountID){
        return res.json({msg: "not exist"})
    }

    // const complainForm =  Forms.create({
    //     title,
    //     department,
    //     accountID

    // })

    const complainForm = new Forms()

    complainForm.account = accountID!
    complainForm.title = title
    complainForm.department = department
    complainForm.issueDecription  = description
    complainForm.issueType = issueType
    complainForm.status = status
    complainForm.location = location

    if(!complainForm){
        return res.json({msg: "not exist"})
    }

    await complainForm.save();


	return res.json(complainForm);

		
});

export { router as createComplainForm };