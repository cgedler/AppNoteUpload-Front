import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Section } from './section';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Section[]> {
    return this.http.get<Section[]>(environment.urlHost + "section/");
  }

  getById(id:number):Observable<Section> {
    return this.http.get<Section>(environment.urlHost + "section/" + id);
  }

  create(Section:Section):Observable<Section> {
    return this.http.post<Section>(environment.urlHost + "section/", Section);
  }

  update(Section:Section):Observable<Section> {
    return this.http.put<Section>(environment.urlHost + "section/" + Section.id, Section);
  }

  delete(id:number):Observable<Section> {
    return this.http.delete<Section>(environment.urlHost + "section/" + id);
  }

}
