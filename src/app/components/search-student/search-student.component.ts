import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Student} from "../../entities/student";
import {StudentService} from "../../services/student/student.service";
import {TitleCasePipe} from "@angular/common";

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
    private toTitleCase: TitleCasePipe,
  ){ }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const student = this.searchForm.value;
    this.studentService.getStudentByName(
      this.toTitleCase.transform(<string>student.first),
      this.toTitleCase.transform(<string>student.last))
      .subscribe(students => this.students = students);
    this.searchForm.reset();

  }

}
