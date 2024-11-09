import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Evaluation } from './evaluation';


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(environment.urlHost + "evaluation/");
  }

  getById(id:number):Observable<Evaluation> {
    return this.http.get<Evaluation>(environment.urlHost + "evaluation/" + id);
  }

  create(Evaluation:Evaluation):Observable<Evaluation> {
    return this.http.post<Evaluation>(environment.urlHost + "evaluation/", Evaluation);
  }

  update(Evaluation:Evaluation):Observable<Evaluation> {
    return this.http.put<Evaluation>(environment.urlHost + "evaluation/" + Evaluation.id, Evaluation);
  }

  delete(id:number):Observable<Evaluation> {
    return this.http.delete<Evaluation>(environment.urlHost + "evaluation/" + id);
  }

}
