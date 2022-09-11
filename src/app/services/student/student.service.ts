import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {Observable} from "rxjs";
import {Student} from "../../entities/student";
import {UserInfo} from "../../entities/userInfo";

import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'https://daycare-backend.calmcoast-837dad38.eastus.azurecontainerapps.io/students';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }  

  constructor(
    private http: HttpClient, private messageService: MessageService) {
  }
  createOptionWithHeader(){
    let header = new HttpHeaders({'Content-Type': 'application/json', 'auth': localStorage.getItem("userInfo")!});
    const httpOptions = {headers: header}
    return httpOptions;
  }
  getStudents(): Observable<Student[]>{

    return this.http.get<Student[]>(this.studentsUrl, this.createOptionWithHeader());

  }

  getStudent(id: number): Observable<Student>{

    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);

  }

  addStudent(student: Student): Observable<Student>{

    return this.http.post<Student>(this.studentsUrl, student, this.createOptionWithHeader());

  }

  deleteStudent(id: number): Observable<boolean>{

    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<boolean>(url, this.createOptionWithHeader());

  }

  getStudentByName(first: string, last: string): Observable<Student[]>{

    const url = `${this.studentsUrl}?firstname=${first}&lastname=${last}`;
    return this.http.get<Student[]>(url, this.createOptionWithHeader());

  }

  getUserInfo(token:string): UserInfo{
    try {
      return jwt_decode(token);
    } catch(Error) {
      return {'role': "unknow", 'username':"unknow"};
    }
  }



}
