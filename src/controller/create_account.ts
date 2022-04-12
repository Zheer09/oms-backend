import express from 'express';
import { Accounts , accountType } from '../entity/accounts';

const router = express.Router();

router.post('/api/createAcc', async (req, res) => {
	const {
		firstName,
		lastName,
		emailaddress,
		password,
		phone_num,
        typeacc
	} = req.body;

	const account = null;
    
	if(typeacc === "citizen"){
	const account = Accounts.create({
		firstName,
		lastName,
		emailaddress,
        password,
        phone_num,
        typeacc: accountType.CITIZENS
		
	});
	

	await account.save();

	return res.json(account);
	
	}

	else if(typeacc === "maintainer"){
		const account = Accounts.create({
			firstName,
			lastName,
			emailaddress,
			password,
			phone_num,
			typeacc: accountType.MAINTAINER
			
		});
		
	
		await account.save();

		return res.json(account);
		
		}

		return res.json(account);

		
});

export { router as createClientRouter };