import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subject } from './subject';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

 @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userLoginOn:boolean=false;

  subjects:Subject[]=[];
  dataSource = new MatTableDataSource<Subject>(this.subjects);

  displayedColumns: string[] = ['id', 'date', 'note'];

  constructor(
    private loginService:LoginService,
    private subjectService:SubjectService) { }
  
  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.subjectService.getAll().subscribe(
      response => {
        this.subjects = response;
        this.dataSource.data = this.subjects;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  delete(Subject:Subject):void {
    this.subjectService.delete(Subject.id).subscribe(
      result => this.subjectService.getAll().subscribe(
        response => this.subjects = response
      )
    );
  }
}
