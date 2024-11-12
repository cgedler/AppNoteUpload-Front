import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../evaluation/evaluation';
import { EvaluationService } from '../evaluation/evaluation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';
import { Subject } from '../subject/subject';
import { SubjectService } from '../subject/subject.service';
import { Teacher } from '../teacher/teacher';
import { TeacherService } from '../teacher/teacher.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrl: './evaluation-form.component.css'
})
export class EvaluationFormComponent implements OnInit {
 
    evaluation:Evaluation = new Evaluation();
    title:string = "Register Evaluation";
    actionValue:string = "";
    students:Student[]=[];
    subjects:Subject[]=[];
    teachers:Teacher[]=[];

  constructor(
    private evaluationService:EvaluationService,
    private studentService:StudentService,
    private subjectService:SubjectService,
    private teacherService:TeacherService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;

    this.studentService.getAll().subscribe(
      response => {
        this.students = response;
    });

    this.subjectService.getAll().subscribe(
      response => {
        this.subjects = response;
    });

    this.teacherService.getAll().subscribe(
      response => {
        this.teachers = response;
    });

  }

  create():void {
    this.evaluationService.create(this.evaluation).subscribe(
      (res: any) => this.router.navigate(['evaluation'])
    )

  }

  load():void {
    this.activateRouter.params.subscribe(
      element => {
        let id = element['id'];
        if(id) {
          this.evaluationService.getById(id).subscribe(
            (elementGet: any) => this.evaluation = elementGet
          );
        }
      } 
    )
  }

  update():void {
    this.evaluationService.update(this.evaluation).subscribe(
      result => this.router.navigate(['evaluation'])
    );
  }
}
