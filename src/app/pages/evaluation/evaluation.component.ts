import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Evaluation } from './evaluation';
import { EvaluationService } from './evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {

  @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userLoginOn:boolean=false;

  evaluations:Evaluation[]=[];
  dataSource = new MatTableDataSource<Evaluation>(this.evaluations);

  displayedColumns: string[] = ['id', 'date', 'note', 'app.studentId', 'app.teacherId', 'app.subjectId', 'actions'];

  constructor(
    private loginService:LoginService,
    private evaluationService:EvaluationService) { }
  
  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.evaluationService.getAll().subscribe(
      response => {
        this.evaluations = response;
        this.dataSource.data = this.evaluations;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  delete(Evaluation:Evaluation):void {
    this.evaluationService.delete(Evaluation.id).subscribe(
      result => this.evaluationService.getAll().subscribe(
        response => this.evaluations = response
      )
    );
  }
}
