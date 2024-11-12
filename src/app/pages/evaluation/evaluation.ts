import { Student } from "../student/student";
import { Subject } from "../subject/subject";
import { Teacher } from "../teacher/teacher";

export class Evaluation {
    public id: number = 0;
    public date!: Date;
    public note: number = 0;
    public student: Student = new Student;
    public subject: Subject = new Subject;
    public teacher: Teacher = new Teacher;
    public constructor() {}
}
