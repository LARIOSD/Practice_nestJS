export default interface userData {
    id: number;
    userName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    newPassword?: string
    createdAt: Date;
    updatedAt: Date;
}