import { Chapter } from "./chapter";

export class Course {
    id?: string;
    label: string;
    description: string;
    chapters?: Chapter[];
}
