import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher/teacher';
import { TeacherService } from '../teacher/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent implements OnInit {
  teacher:Teacher = new Teacher();
    title:string = "Register Teacher";
    actionValue:string = "";

  constructor(
    private teacherService:TeacherService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;
  }

  create():void {
    this.teacherService.create(this.teacher).subscribe(
      (res: any) => this.router.navigate(['teacher'])
    )

  }

  load():void {
    this.activateRouter.params.subscribe(
      element => {
        let id = element['id'];
        if(id) {
          this.teacherService.getById(id).subscribe(
            (elementGet: any) => this.teacher = elementGet
          );
        }
      } 
    )
  }

  update():void {
    this.teacherService.update(this.teacher).subscribe(
      result => this.router.navigate(['teacher'])
    );
  }
}
