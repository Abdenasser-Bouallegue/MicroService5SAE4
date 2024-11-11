export interface Lesson {
    idLesson: number;
    subject: string;
    teacher: string;
    studentGroup: string;
    timeslot: Timeslot;
    room: Room;
  }


  export interface Timeslot {
    idTimeslot: number;
    dayOfWeek: string; 
    startTime: string; 
    endTime: string;
  }

  export interface Room {
    idRoom: number;
    name: string;
  }