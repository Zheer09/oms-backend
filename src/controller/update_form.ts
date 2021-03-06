import express from 'express';
import { Accounts  } from '../entity/accounts';
import { Forms } from '../entity/form';

const router = express.Router();


router.put('/api/updateForm/:userID/:formID', async (req, res) => {

    const { 
        userID,
        formID
    } = req.params;

      

      const accountID = await Accounts.findOneBy({id: parseInt(userID)})

      const form = await Forms.findOneBy({formId: parseInt(formID)})


    // const forms = await AppDataSource.createQueryBuilder().update(Forms).set({formImages: [images]}).where("complainForm.userId = :id" ,{id})
    // .andWhere("complainForm.formId = :formID",{formID}).updateEntity(true).execute()



    const titleissue = form?.title
    const status = form?.status
    const locationissue = form?.location
    const issue = form?.issueType
    const descriptionissue = form?.issueDecription
    const departmentIssue = form?.department

    const UpdateForm = await Forms.save({
        formId: parseInt(formID),
        account: accountID!,
        title: titleissue,
        status: status,
        location: locationissue,
        issueType: issue, 
        issueDecription: descriptionissue,
        department: departmentIssue,
        formImages: req.body})

	return res.json(UpdateForm);

});

export { router as updateComplainimage };