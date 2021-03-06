import { SignInDTO } from '../../dto/auth/signin.dto'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpDTO } from '../../dto/auth/signup.dto';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }


    async signin(signinDTO: SignInDTO): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*'
        })
      }

      let body = JSON.stringify(signinDTO);
      let response = await this.http.post(`${environment.apiURL}/auth/signin`, body, httpOptions).toPromise();
      return response;
    }

    async signup(signupDTO: SignUpDTO): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*'
        })
      }

      let body = JSON.stringify(signupDTO);
      let response = await this.http.post(`${environment.apiURL}/auth/signup`, body, httpOptions).toPromise();
      return response;
    }
}
