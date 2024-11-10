export interface Users {
    id:number;
    firstname: string;
    lastname: string;
    email: string;
    role: Roles;
    birthday: Date;
    mfaEnabled: boolean;
    phoneNumber: number;
    registrationNumber: string;
    ncin: string;
    image:string;
    blocking:boolean;
    company: string;
  }
  
  export enum Roles {
    HEADOFDEPARTEMENT = 'HEADOFDEPARTEMENT',
    TEACHER = 'TEACHER',
    ADMIN='ADMIN',
    SUPERADMIN='SUPERADMIN',
    STUDENT='STUDENT',
    RECRUITER='RECRUITER'
  }