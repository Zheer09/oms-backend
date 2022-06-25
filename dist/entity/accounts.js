"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = exports.accountType = void 0;
const typeorm_1 = require("typeorm");
const form_1 = require("./form");
var accountType;
(function (accountType) {
    accountType["CITIZENS"] = "citizen";
    accountType["MAINTAINER"] = "maintainer";
})(accountType = exports.accountType || (exports.accountType = {}));
let Accounts = class Accounts extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Accounts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Accounts.prototype, "emailaddress", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Accounts.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric"),
    __metadata("design:type", Number)
], Accounts.prototype, "phone_num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounts.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Accounts.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: accountType,
        default: accountType.CITIZENS
    }),
    __metadata("design:type", String)
], Accounts.prototype, "typeacc", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Accounts.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Accounts.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => form_1.Forms, (complainForm) => complainForm.account),
    __metadata("design:type", Array)
], Accounts.prototype, "complainForm", void 0);
Accounts = __decorate([
    (0, typeorm_1.Entity)({ name: "account" })
], Accounts);
exports.Accounts = Accounts;
//# sourceMappingURL=accounts.js.map