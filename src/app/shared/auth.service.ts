import { SignInDTO } from './dto/auth/signin.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }


    async signin(signinDTO: SignInDTO){
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*'
        })
      }
      

      let body = JSON.stringify(signinDTO);
      let response = await this.http.post('http://localhost:3000/auth/signin', body, httpOptions).toPromise();
      console.log(response)
    }
}
