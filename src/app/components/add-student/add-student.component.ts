import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student/student.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router: Router) { }
  showForm: boolean = false;
  fname: string = "";
  lname: string = "";
  gname: string = "";
  status: string = "";


  ngOnInit(): void {
  
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.status = "";
    this.fname = "";
    this.lname = "";
    this.gname = "";
  }

  addStudent(): void {

    let student: Student = {
      sid: 0,
      fname: this.fname,
      lname: this.lname,
      gname: this.gname
    };

    if (student.fname.length == 0 || student.lname.length == 0 || student.gname.length == 0) {
      this.status = "Please fill in all fields to create a student."
      return;
    }

    this.studentService.addStudent(student).subscribe({
        next: student => this.reloadComponent(),
        error: error => {
          console.log(error);
          alert("error occured during creating a student");
        }
    });

    this.toggleForm();
    this.status = `Student Created!`;

  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}

