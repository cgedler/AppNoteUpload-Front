import { Evaluation } from "../evaluation/evaluation";

export class Subject {
    public id: number = 0;
    public description: string = "";
    public journey: number = 0;
    public quater: number = 0;
    public Evaluation: Evaluation[] = [];
    public constructor() {}
}
