import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {Observable} from "rxjs";
import {Student} from "../../entities/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'http://localhost:8080/students';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getStudents(): Observable<Student[]>{

    return this.http.get<Student[]>(this.studentsUrl);

  }

  getStudent(id: number): Observable<Student>{

    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);

  }

  addStudent(student: Student): Observable<Student>{

    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions);

  }

  deleteStudent(id: number): Observable<boolean>{

    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<boolean>(url, this.httpOptions);

  }

  getStudentByName(first: string | null | undefined, last: string | null | undefined): Observable<Student[]>{

    const url = `${this.studentsUrl}?firstname=${first}&lastname=${last}`;
    return this.http.get<Student[]>(url);

  }






}
