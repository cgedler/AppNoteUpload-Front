import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Student[]> {
    return this.http.get<Student[]>(environment.urlHost + "student/");
  }

  getById(id:number):Observable<Student> {
    return this.http.get<Student>(environment.urlHost + "student/" + id);
  }

  create(Student:Student):Observable<Student> {
    return this.http.post<Student>(environment.urlHost + "student/", Student);
  }

  update(Student:Student):Observable<Student> {
    return this.http.put<Student>(environment.urlHost + "student/" + Student.id, Student);
  }

  delete(id:number):Observable<Student> {
    return this.http.delete<Student>(environment.urlHost + "student/" + id);
  }

}
