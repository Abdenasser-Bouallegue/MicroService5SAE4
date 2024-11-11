export class Quiz {
  id: number;
  title: string;
  description: string;
  duration: number;

  constructor(id: number, title: string, description: string, duration: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
  }
}
