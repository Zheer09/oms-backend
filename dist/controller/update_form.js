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
exports.updateComplainimage = void 0;
const express_1 = __importDefault(require("express"));
const accounts_1 = require("../entity/accounts");
const form_1 = require("../entity/form");
const router = express_1.default.Router();
exports.updateComplainimage = router;
router.put('/api/updateForm/:userID/:formID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, formID } = req.params;
    const accountID = yield accounts_1.Accounts.findOneBy({ id: parseInt(userID) });
    const form = yield form_1.Forms.findOneBy({ formId: parseInt(formID) });
    const titleissue = form === null || form === void 0 ? void 0 : form.title;
    const status = form === null || form === void 0 ? void 0 : form.status;
    const locationissue = form === null || form === void 0 ? void 0 : form.location;
    const issue = form === null || form === void 0 ? void 0 : form.issueType;
    const descriptionissue = form === null || form === void 0 ? void 0 : form.issueDecription;
    const departmentIssue = form === null || form === void 0 ? void 0 : form.department;
    const UpdateForm = yield form_1.Forms.save({
        formId: parseInt(formID),
        account: accountID,
        title: titleissue,
        status: status,
        location: locationissue,
        issueType: issue,
        issueDecription: descriptionissue,
        department: departmentIssue,
        formImages: req.body
    });
    return res.json(UpdateForm);
}));
//# sourceMappingURL=update_form.js.map