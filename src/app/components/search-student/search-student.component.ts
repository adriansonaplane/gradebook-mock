import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Student} from "../../entities/student";
import {StudentService} from "../../services/student/student.service";

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})

export class SearchStudentComponent implements OnInit {

  students: Student[] = [];

  searchForm = this.formBuilder.group({
    first: '',
    last: ''
  })

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
  ){ }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const user = this.searchForm.value;
    this.studentService.getStudentByName(user.first, user.last).subscribe(students => this.students = students);
    this.searchForm.reset();

  }

}
