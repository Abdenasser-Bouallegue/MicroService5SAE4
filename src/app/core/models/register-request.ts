export interface RegisterRequest {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: RoleType;
  mfaEnabled?: string;
  birthday?: Date;
  phoneNumber?: number;
  registrationNumber?: string;
  ncin?: string;
  company?: string;
  image?: string;
}
export enum RoleType {
  STUDENT = 'STUDENT',
  RECRUITER = 'RECRUITER'
}