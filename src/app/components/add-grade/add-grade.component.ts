import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/entities/grade';
import { GradeService } from 'src/app/services/grade/grade.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private gradeService: GradeService
  ) { }

  sid: number = 0;
  showForm: boolean = false;
  status: string = "";

  note: string = "";
  behavior: string = "";

  ngOnInit(): void {
    this.sid = Number(this.route.snapshot.paramMap.get('sid'));
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.note = "";
    this.behavior = "";
    this.status = "";
  }

  addGrade(): void {

    let grade: Grade = {
      gid: 0,
      sid: this.sid,
      treported: Date.now() / 1000,
      note: this.note,
      behavior: this.behavior
    };

    if (grade.note.length == 0 || grade.behavior.length == 0) {
      this.status = "Please fill in all fields";
      return;
    }

    this.gradeService.addGrade(grade).subscribe();

    location.reload();
    this.status = `Grade Created!`;

  }

}
