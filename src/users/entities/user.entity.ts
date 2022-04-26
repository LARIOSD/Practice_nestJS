import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type : 'bigint',
        name : 'user_id'
    })
    id: number;

    @Column({
        name: 'user_name'
    })
    name: string;

    @Column({
        name: 'lastname'
    })
    lastname:string;

    @Column({
        name: 'email_addres'
    })
    emailAddress: string;

    @Column({
        name     : 'password',
        nullable : false,
    })
    password: string;
}
