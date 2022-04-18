import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import {Accounts} from "./accounts";


@Entity("complainForm")
export class Forms extends BaseEntity {

    @PrimaryGeneratedColumn()
    formId: number

    @Column()
    title: string

    @Column()
    department: String

    @Column()
    location: String

    @Column()
    issueType: string

    @Column("text")
    issueDecription: string

    @Column()
    status: string

    @Column({type: "simple-array",default:[]})
    formImages: string[]

    @ManyToOne(
        () => Accounts,
        (account) => account.complainForm
    )
    @JoinColumn({name: "userId"})
    account: Accounts

}
