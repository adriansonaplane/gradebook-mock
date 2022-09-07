import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentService:StudentService) { }
  studentList:Student[] = this.studentService.studentList;

  ngOnInit(): void {}

  deletStudent(sid:number){
    this.studentService.deleteStudent(sid).subscribe({
      next: status => {
          console.log(status);
          alert("Delete successful")
          let ind = this.studentList.findIndex(student => student.sid === sid);
          this.studentList.splice(ind, 1);
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });
  }

}
