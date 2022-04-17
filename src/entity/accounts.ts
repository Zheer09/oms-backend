import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { Forms } from "./form"

export enum accountType{
    CITIZENS= "citizen",
    MAINTAINER= "maintainer"
}

@Entity({name: "account"})
export class Accounts extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    emailaddress: string

    @Column("text") 
    password: string

    @Column("numeric")
    phone_num: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        type: "enum",
        enum: accountType,
        default: accountType.CITIZENS
    })
    typeacc: string

    @Column({nullable: true})
    status: string

    @Column({nullable: true})
    jobTitle: string

    @OneToMany(
        () => Forms,
        (complainForm) => complainForm.account
    )
    complainForm: Forms[]

}
