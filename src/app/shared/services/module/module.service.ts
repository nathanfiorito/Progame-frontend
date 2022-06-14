import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpDTO } from '../../dto/auth/signup.dto';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
    token!: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
    ) { 
        this.token = this.cookieService.get("accessToken");
    }


    async getAllModules(): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.token}`,
        })
      }

      let response = await this.http.get('http://localhost:3000/module/list', httpOptions).toPromise();
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
      let response = await this.http.post('http://localhost:3000/auth/signup', body, httpOptions).toPromise();
      return response;
    }
}
