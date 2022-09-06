import { NgModule } from '@angular/core';
import {Routes, RouterModule } from "@angular/router";

import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {StudentsComponent} from "./components/students/students.component";
import {GradesComponent} from "./components/grades/grades.component";
import {SearchStudentComponent} from "./components/search-student/search-student.component";
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'search', component: SearchStudentComponent},
  {path: 'studentlist', component: StudentListComponent},
  {path: 'grades/:sid', component: GradesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
