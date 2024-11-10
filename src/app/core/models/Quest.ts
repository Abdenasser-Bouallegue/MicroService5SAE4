export interface Quest {
    id:number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string; // Assuming Quest.WantedRole is an enum or string
    mfaEnabled: boolean;
    birthday: Date;
    phoneNumber: number;
    registrationNumber: string;
    ncin: string;
    company: string;
    image: string;
}
