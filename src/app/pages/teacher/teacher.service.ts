import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Teacher } from './teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Teacher[]> {
    return this.http.get<Teacher[]>(environment.urlHost + "teacher/");
  }

  getById(id:number):Observable<Teacher> {
    return this.http.get<Teacher>(environment.urlHost + "teacher/" + id);
  }

  create(Teacher:Teacher):Observable<Teacher> {
    return this.http.post<Teacher>(environment.urlHost + "teacher/", Teacher);
  }

  update(Teacher:Teacher):Observable<Teacher> {
    return this.http.put<Teacher>(environment.urlHost + "teacher/" + Teacher.id, Teacher);
  }

  delete(id:number):Observable<Teacher> {
    return this.http.delete<Teacher>(environment.urlHost + "teacher/" + id);
  }

}
