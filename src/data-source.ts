import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
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
})
