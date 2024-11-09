import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

 @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userLoginOn:boolean=false;

  teachers:Teacher[]=[];
  dataSource = new MatTableDataSource<Teacher>(this.teachers);

  displayedColumns: string[] = ['id', 'date', 'note'];

  constructor(
    private loginService:LoginService,
    private teacherService:TeacherService) { }
  
  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.teacherService.getAll().subscribe(
      response => {
        this.teachers = response;
        this.dataSource.data = this.teachers;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  delete(Teacher:Teacher):void {
    this.teacherService.delete(Teacher.id).subscribe(
      result => this.teacherService.getAll().subscribe(
        response => this.teachers = response
      )
    );
  }
}
