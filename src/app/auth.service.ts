import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpService, private jwtHelper: JwtHelperService) { }

  singin(user:any){
    return this.http.post(`/login`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
