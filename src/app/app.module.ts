import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { GradeComponent } from './components/grade/grade.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StudentsComponent } from './components/students/students.component';
import { GradesComponent } from './components/grades/grades.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import {TitleCasePipe} from "@angular/common";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    GradeComponent,
    NavBarComponent,
    StudentsComponent,
    GradesComponent,
    SearchStudentComponent,
    StudentListComponent,
    AddStudentComponent,
    AddGradeComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
