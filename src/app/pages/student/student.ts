import { Evaluation } from "../evaluation/evaluation";
import { Section } from "../section/section";

export class Student {
    public id: number = 0;
    public name: string = "";
    public surname: string = "";
    public sex: string = "";
    public birthdate!: Date;
    public phone: string = "";
    public email: string = "";
    public license: string = "";
    public Evaluation: Evaluation[] = [];
    public Section: Section = new Section;
    public constructor() {}
}
