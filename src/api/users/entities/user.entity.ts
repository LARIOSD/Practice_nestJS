import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type : 'bigint',
        name : 'id'
    })
    id: number;

    @Column({
        name     : 'userName',
        length   : 30,
        nullable : false,
        unique   : true,
    })
    userName: string;

    @Column({
        name     : 'lastName',
        length   : 30,
        nullable : false,
    })
    lastName:string;

    @Column({
        name     : 'firstName',
        length   : 30,
        nullable : false,
    })
    firstName:string;

    @Column({
        name     : 'phoneNumber',
        length   : 15,
        nullable : false,
    })
    phoneNumber:string;

    @Column({
        name     : 'emailAddres',
        length   : 30,
        nullable : false,
        unique   : true,
    })
    emailAddress: string;

    @Column({
        name     : 'password',
        length   : 64,
        nullable : false,
    })
    password: string;    
    
    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)' ,
    })
    createdAt: Date;

    @UpdateDateColumn({ 
        type    : 'timestamp', 
        default : () => 'CURRENT_TIMESTAMP(6)', 
    })
    updatedAt: Date;
}
