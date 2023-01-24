import { ROLES } from "./roles.enum";

export class User {
    username = '';
    email = '';
    password = '';
    role = ROLES.USER;

    constructor(username, email, password, role){
        this.username = username;
        this.emial = email;
        this.password = password;
        this.role = role;
    }
}