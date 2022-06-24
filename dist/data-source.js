"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "postgres.c5gcbsksozji.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "clayHP12",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [`src/entity/**/*`],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map