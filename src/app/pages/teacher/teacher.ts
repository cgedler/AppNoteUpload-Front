import { Evaluation } from "../evaluation/evaluation";

export class Teacher {
    public id: number = 0;
    public name: string = "";
    public surname: string = "";
    public sex: string = "";
    public birthdate!: Date;
    public phone: string = "";
    public email: string = "";
    public Evaluation: Evaluation[] = [];
    public constructor() {}
}