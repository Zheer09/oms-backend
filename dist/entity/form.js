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
exports.Forms = void 0;
const typeorm_1 = require("typeorm");
const accounts_1 = require("./accounts");
let Forms = class Forms extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Forms.prototype, "formId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Forms.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Forms.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Forms.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Forms.prototype, "issueType", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Forms.prototype, "issueDecription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Forms.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", default: [] }),
    __metadata("design:type", Array)
], Forms.prototype, "formImages", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => accounts_1.Accounts, (account) => account.complainForm),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", accounts_1.Accounts)
], Forms.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Forms.prototype, "maintainer", void 0);
Forms = __decorate([
    (0, typeorm_1.Entity)("complainForm")
], Forms);
exports.Forms = Forms;
//# sourceMappingURL=form.js.map