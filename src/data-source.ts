import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "",
    port: 5432,
    username: "",
    password: "",
    database: "",
    synchronize: true,
    logging: false,
    entities: [`dist/entity/**/*`],
    migrations: [],
    subscribers: [],
})
