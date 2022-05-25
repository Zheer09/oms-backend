import express from 'express';
import { Accounts  } from '../entity/accounts';
import { Forms } from '../entity/form';

const router = express.Router();


router.put('/api/updateAcc/:userID', async (req, res) => {

    const { 
        userID,
    } = req.params;

    const {

        firstName,
        lastName,
        phoneNumber,
        password

    } = req.body


    let passwordset;

      const accountID = await Accounts.findOneBy({id: parseInt(userID)})

     

      if(!password){

        passwordset = accountID?.password

      }else{
        passwordset = password;
      }


      const UpdateForm = await Accounts.save({
       id: parseInt(userID),
       emailaddress: accountID?.emailaddress,
       jobTitle: accountID?.jobTitle,
       typeacc: accountID?.typeacc,
       status: accountID?.status ,
       firstName: firstName,
       lastName: lastName,
       phone_num: phoneNumber,
       password: passwordset,

    })

	return res.json(UpdateForm);

});

export { router as updateAccount };