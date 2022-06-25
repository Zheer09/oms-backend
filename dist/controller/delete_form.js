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
exports.deleteForm = void 0;
const express_1 = __importDefault(require("express"));
const form_1 = require("../entity/form");
const router = express_1.default.Router();
exports.deleteForm = router;
router.delete('/api/deleteForm/:formID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formID } = req.params;
    const respone = yield form_1.Forms.delete({ formId: parseInt(formID) });
    console.log(respone);
    if (respone.affected === 1) {
        return res.json({ msg: "deleted" });
    }
    else {
        return res.json({ msg: "Notdeleted" });
    }
}));
//# sourceMappingURL=delete_form.js.map