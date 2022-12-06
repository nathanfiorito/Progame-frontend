import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { Token } from '../../entity/token.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token!: Token;
  public exp!: number;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
    ) { 
      this.token = this.getDecodedAccessToken(this.cookieService.get('accessToken'))
    }

    async getAllUsers(): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.cookieService.get("accessToken")}`,
        })
      }

      let response = await this.http.get(`${environment.apiURL}/auth/FindAllAsync`, httpOptions).toPromise();
      return response;
    }

    async getUserExp():Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.cookieService.get("accessToken")}`,
        })
      }

      let response = await this.http.get(`${environment.apiURL}/auth/GetUserInfo?Id=${this.token.id}`, httpOptions).toPromise();
      return response;
    }

    setUserExp(exp:number){
      this.exp = exp;
    }

    getDecodedAccessToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch(error) {
        return null;
      }
    }
}

