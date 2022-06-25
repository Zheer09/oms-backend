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
exports.createClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const accounts_1 = require("../entity/accounts");
const router = express_1.default.Router();
exports.createClientRouter = router;
router.post('/api/createAcc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, emailaddress, password, phone_num, typeacc, status } = req.body;
    const account = null;
    const accountID = yield accounts_1.Accounts.findOneBy({ emailaddress: emailaddress });
    if (accountID) {
        res.json({ msg: "emailExist" });
    }
    if (typeacc === "citizen") {
        const account = accounts_1.Accounts.create({
            firstName,
            lastName,
            emailaddress,
            password,
            phone_num,
            typeacc: accounts_1.accountType.CITIZENS,
            status,
        });
        yield account.save();
        return res.json(account);
    }
    else if (typeacc === "maintainer") {
        const account = accounts_1.Accounts.create({
            firstName,
            lastName,
            emailaddress,
            password,
            phone_num,
            status,
            typeacc: accounts_1.accountType.MAINTAINER
        });
        yield account.save();
        return res.json(account);
    }
    return res.json(account);
}));
//# sourceMappingURL=create_account.js.map