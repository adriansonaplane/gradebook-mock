import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student/student.service";
import {Student} from "../../entities/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  // addStudent(first: string, last: string, guardian: string): void {
  //
  //   const tempStudent = {first, last, guardian};
  //   this.studentService.addStudent(tempStudent).subscribe(student => {this.students.push(student);});
  // }

}
