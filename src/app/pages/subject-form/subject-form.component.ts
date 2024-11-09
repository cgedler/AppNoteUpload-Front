import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject/subject';
import { SubjectService } from '../subject/subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrl: './subject-form.component.css'
})
export class SubjectFormComponent implements OnInit {
  subject:Subject = new Subject();
    title:string = "Register Subject";
    actionValue:string = "";

  constructor(
    private subjectService:SubjectService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;
  }

  create():void {
    this.subjectService.create(this.subject).subscribe(
      (res: any) => this.router.navigate(['subject'])
    )

  }

  load():void {
    this.activateRouter.params.subscribe(
      element => {
        let id = element['id'];
        if(id) {
          this.subjectService.getById(id).subscribe(
            (elementGet: any) => this.subject = elementGet
          );
        }
      } 
    )
  }

  update():void {
    this.subjectService.update(this.subject).subscribe(
      result => this.router.navigate(['subject'])
    );
  }
}
