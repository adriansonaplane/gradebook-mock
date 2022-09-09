import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/entities/grade';
import { GradeService } from 'src/app/services/grade/grade.service';
import {UserInfo} from "../../entities/userInfo";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  sid: number = 0;
  gradeList:Grade[] = [];
  curUser: UserInfo = this.authService.curUser;
  
  constructor(
    private route: ActivatedRoute,
    private gradeService:GradeService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.sid = Number(this.route.snapshot.paramMap.get('sid'));

    this.gradeService.getGradesByStudentId(this.sid).subscribe(grades => this.gradeList = grades);
  }
  deleteGrade(id:number){
    this.gradeService.deleteGrade(id).subscribe({
      next: status => {
          console.log(status);
          alert("Delete successful")
          location.reload();
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });;
  }

}
