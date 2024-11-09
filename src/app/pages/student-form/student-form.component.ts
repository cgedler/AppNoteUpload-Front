import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {
  student:Student = new Student();
    title:string = "Register Student";
    actionValue:string = "";

  constructor(
    private studentService:StudentService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;
  }

  create():void {
    this.studentService.create(this.student).subscribe(
      (res: any) => this.router.navigate(['student'])
    )

  }

  load():void {
    this.activateRouter.params.subscribe(
      element => {
        let id = element['id'];
        if(id) {
          this.studentService.getById(id).subscribe(
            (elementGet: any) => this.student = elementGet
          );
        }
      } 
    )
  }

  update():void {
    this.studentService.update(this.student).subscribe(
      result => this.router.navigate(['student'])
    );
  }
}
