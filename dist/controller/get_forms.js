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
exports.geFormsRouter = void 0;
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
const form_1 = require("../entity/form");
const router = express_1.default.Router();
exports.geFormsRouter = router;
router.get('/api/getForms/:userID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, } = req.params;
    const forms = yield data_source_1.AppDataSource.createQueryBuilder(form_1.Forms, 'complainForm')
        .where("complainForm.userId = :userID", { userID })
        .getMany();
    if (!forms) {
        res.json({ msg: "noForm" });
    }
    return res.json(forms);
}));
//# sourceMappingURL=get_forms.js.map