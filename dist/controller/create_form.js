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
exports.createComplainForm = void 0;
const express_1 = __importDefault(require("express"));
const accounts_1 = require("../entity/accounts");
const form_1 = require("../entity/form");
const router = express_1.default.Router();
exports.createComplainForm = router;
router.post('/api/createForm/:userID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.params;
    const { title, department, issueType, location, description, images, status } = req.body;
    const accountID = yield accounts_1.Accounts.findOneBy({ id: parseInt(userID) });
    if (!accountID) {
        return res.json({ msg: "not exist" });
    }
    const complainForm = new form_1.Forms();
    complainForm.account = accountID;
    complainForm.title = title;
    complainForm.department = department;
    complainForm.issueDecription = description;
    complainForm.issueType = issueType;
    complainForm.status = status;
    complainForm.location = location;
    if (!complainForm) {
        return res.json({ msg: "not exist" });
    }
    yield complainForm.save();
    return res.json(complainForm);
}));
//# sourceMappingURL=create_form.js.map