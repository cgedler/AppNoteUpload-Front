import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Subject } from './subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Subject[]> {
    return this.http.get<Subject[]>(environment.urlHost + "subject/");
  }

  getById(id:number):Observable<Subject> {
    return this.http.get<Subject>(environment.urlHost + "subject/" + id);
  }

  create(Subject:Subject):Observable<Subject> {
    return this.http.post<Subject>(environment.urlHost + "subject/", Subject);
  }

  update(Subject:Subject):Observable<Subject> {
    return this.http.put<Subject>(environment.urlHost + "subject/" + Subject.id, Subject);
  }

  delete(id:number):Observable<Subject> {
    return this.http.delete<Subject>(environment.urlHost + "subject/" + id);
  }
}
