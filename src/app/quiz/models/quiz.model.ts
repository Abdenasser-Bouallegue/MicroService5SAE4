export class Quiz {
  id: number;
  role: Role;
  title: string;
  description: string;
  duration: number;
  questions: Question[];

  constructor(
    id: number,
    role: Role,
    title: string,
    description: string,
    duration: number,
    questions: Question[]
  ) {
    this.id = id;
    this.role = role;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.questions = questions;
  }
}

export class Role {
  id!: number;
  name!: string;
}

export class Question {
  id! : number;

  questionText!: string;
  options: Option[] = [];

}

export class Option {
  id!: number;
  optionText!: string;
  isCorrectOption!: boolean;

}