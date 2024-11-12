import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

 @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userLoginOn:boolean=false;

  students:Student[]=[];
  dataSource = new MatTableDataSource<Student>(this.students);

  displayedColumns: string[] = ['id', 'name', 'surname', 'sex', 'birthdate', 'phone', 'email', 'license', 'actions'];

  constructor(
    private loginService:LoginService,
    private studentService:StudentService) { }
  
  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.studentService.getAll().subscribe(
      response => {
        this.students = response;
        this.dataSource.data = this.students;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  delete(Student:Student):void {
    this.studentService.delete(Student.id).subscribe(
      result => this.studentService.getAll().subscribe(
        response => this.students = response
      )
    );
  }
}
