
export class Forum {
  idForum!: number;
  title!: string;
  body!: string;
  image!: File;
  createDate!: Date;
  likes!:number;
  dislikes!:number;
  url?: string | ArrayBuffer
}
