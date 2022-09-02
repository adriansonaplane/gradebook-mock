import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message/message.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'http://localhost:8080/students';


  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
