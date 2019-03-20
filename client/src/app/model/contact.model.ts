export class Contact {
    id: number;
    name: string;
    dateOfBirth: Date;
    email: string;
    gender: string;
    amount: number;

    constructor() {
        this.id = 0;
        this.name = null;
        this.dateOfBirth = null;
        this.email = null;
        this.gender = null;
        this.amount = null;
    }
}
