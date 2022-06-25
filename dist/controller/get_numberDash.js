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
exports.geAllRouter = void 0;
const express_1 = __importDefault(require("express"));
const accounts_1 = require("../entity/accounts");
const data_source_1 = require("../data-source");
const router = express_1.default.Router();
exports.geAllRouter = router;
router.get('/api/getAllacc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield data_source_1.AppDataSource.createQueryBuilder(accounts_1.Accounts, 'account')
        .getMany();
    if (!account) {
        res.json({ msg: "noForm" });
    }
    return res.json(account);
}));
//# sourceMappingURL=get_numberDash.js.map