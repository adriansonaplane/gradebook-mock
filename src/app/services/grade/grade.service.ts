import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from 'src/app/entities/grade';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private gradesUrl = 'http://localhost:8080/grades';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getGradesByStudentId(sid: number): Observable<Grade[]>{
    const url = `${this.gradesUrl}/${sid}`;
    return this.http.get<Grade[]>(url);
  }
}
