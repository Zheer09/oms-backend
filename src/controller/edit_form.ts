import express from 'express';
import { Accounts  } from '../entity/accounts';
import { Forms } from '../entity/form';

const router = express.Router();


router.put('/api/updateFormComp/:userID/:formID', async (req, res) => {

    const { 
        userID,
        formID
    } = req.params;


    const{
        title ,
        department,
        issueType,
        location,
        description,
        status
    } = req.body

      

    const accountID = await Accounts.findOneBy({id: parseInt(userID)})



    const UpdateForm = await Forms.save({
        formId: parseInt(formID),
        account: accountID!,
        title: title,
        status: status,
        location: location,
        issueType: issueType, 
        issueDecription: description,
        department: department,
        })

	return res.json(UpdateForm);

});

export { router as updateForm };