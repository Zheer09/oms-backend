"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = void 0;
const express_1 = __importDefault(require("express"));
const accounts_1 = require("../entity/accounts");
const router = express_1.default.Router();
exports.updateAccount = router;
router.put('/api/updateAcc/:userID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, } = req.params;
    const { firstName, lastName, phoneNumber, password } = req.body;
    let passwordset;
    const accountID = yield accounts_1.Accounts.findOneBy({ id: parseInt(userID) });
    if (!password) {
        passwordset = accountID === null || accountID === void 0 ? void 0 : accountID.password;
    }
    else {
        passwordset = password;
    }
    const UpdateForm = yield accounts_1.Accounts.save({
        id: parseInt(userID),
        emailaddress: accountID === null || accountID === void 0 ? void 0 : accountID.emailaddress,
        jobTitle: accountID === null || accountID === void 0 ? void 0 : accountID.jobTitle,
        typeacc: accountID === null || accountID === void 0 ? void 0 : accountID.typeacc,
        status: accountID === null || accountID === void 0 ? void 0 : accountID.status,
        firstName: firstName,
        lastName: lastName,
        phone_num: phoneNumber,
        password: passwordset,
    });
    return res.json(UpdateForm);
}));
//# sourceMappingURL=update_account.js.map