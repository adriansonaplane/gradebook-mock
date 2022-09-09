import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {Token} from "../../entities/token";
import {User} from "../../entities/user";
import jwt_decode from 'jwt-decode';
import {UserInfo} from "../../entities/userInfo";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:8080/login";
  public curUser: UserInfo = {'role': "unknown", 'username':"unknown"};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})

  }
  constructor(
    private http: HttpClient,
    private router: Router

  ) {
    this.setCurUser();
  }

  setCurUser(){
    const curUser: UserInfo = this.getUserInfo();
    this.curUser.role = curUser.role;
    this.curUser.username = curUser.username;
  }

  async logIn(user: User): Promise<void>{
    const object = await lastValueFrom(
      this.http.post<Token>(this.authUrl, user, this.httpOptions));

    localStorage.setItem("userInfo", object.token);
    this.setCurUser();
    this.router.navigate(["/studentlist"]);
  }


  getUserInfo(): UserInfo{
    const token:string = localStorage.getItem("userInfo")!;
    try {
      return jwt_decode(token);
    } catch(Error) {
      return {'role': "unknown", 'username':"unknown"};
    }
  }
  logOut(){
    this.curUser.role = "unknown";
    this.curUser.username = "unknown";
    localStorage.setItem("userInfo", "");
  }

}
