import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";

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
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
