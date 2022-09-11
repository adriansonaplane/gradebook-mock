import { NgModule } from '@angular/core';
import {Routes, RouterModule } from "@angular/router";

import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {StudentsComponent} from "./components/students/students.component";
import {GradesComponent} from "./components/grades/grades.component";
import {SearchStudentComponent} from "./components/search-student/search-student.component";
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'search', component: SearchStudentComponent},
  {path: 'studentlist', component: StudentListComponent},
  {path: 'grades/:sid', component: GradesComponent},
  {path: 'add-student', component: AddStudentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
