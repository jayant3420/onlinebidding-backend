export type CreateUserRequestType = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export type LoginRequestType = {
    email: string;
    password: string;
}