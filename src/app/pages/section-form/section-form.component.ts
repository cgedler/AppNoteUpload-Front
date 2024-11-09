import { Component, OnInit } from '@angular/core';
import { Section } from '../section/section';
import { SectionService } from '../section/section.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrl: './section-form.component.css'
})
export class SectionFormComponent implements OnInit {
  section:Section = new Section();
    title:string = "Register Section";
    actionValue:string = "";

  constructor(
    private sectionService:SectionService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;
  }

  create():void {
    this.sectionService.create(this.section).subscribe(
      res => this.router.navigate(['section'])
    )

  }

  load():void {
    this.activateRouter.params.subscribe(
      element => {
        let id = element['id'];
        if(id) {
          this.sectionService.getById(id).subscribe(
            elementGet => this.section = elementGet
          );
        }
      } 
    )
  }

  update():void {
    this.sectionService.update(this.section).subscribe(
      result => this.router.navigate(['section'])
    );
  }
}
