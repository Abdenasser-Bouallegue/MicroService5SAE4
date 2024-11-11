import { Category } from "./Category";

export class Feedback {
  idFeedback?: number;
  title!: string;
  body!: string;
  reclamationCategory!: Category;
  CreatedAT?: string;
  archived?: boolean;
  user_id?:number;
  forward_to_user?:number;
}
