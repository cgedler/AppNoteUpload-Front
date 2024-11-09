import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../evaluation/evaluation';
import { EvaluationService } from '../evaluation/evaluation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrl: './evaluation-form.component.css'
})
export class EvaluationFormComponent implements OnInit {
 
    evaluation:Evaluation = new Evaluation();
    title:string = "Register Evaluation";
    actionValue:string = "";

  constructor(
    private evaluationService:EvaluationService,
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
    this.actionValue = this.router.url;
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
