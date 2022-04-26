import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type : 'bigint',
        name : 'id'
    })
    id: number;

    @Column({
        name     : 'userName',
        nullable : false,
    })
    userName: string;

    @Column({
        name     : 'lastName',
        nullable : false,
    })
    lastName:string;

    @Column({
        name     : 'emailAddres',
        nullable : false,

    })
    emailAddress: string;

    @Column({
        name     : 'password',
        nullable : false,
    })
    password: string;

    // @Column({ 
    //     type    : 'date',
    //     default : Date,
    // })
    // createdAt: Date;
}
