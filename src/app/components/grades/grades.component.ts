import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/entities/grade';
import { GradeService } from 'src/app/services/grade/grade.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  sid: number = 0;
  gradeList:Grade[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private gradeService:GradeService
    ) { }

  ngOnInit(): void {
    this.sid = Number(this.route.snapshot.paramMap.get('sid'));

    this.gradeService.getGradesByStudentId(this.sid).subscribe(grades => this.gradeList = grades);
  }


}
