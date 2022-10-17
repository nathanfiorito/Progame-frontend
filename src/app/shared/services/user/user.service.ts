import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    token!: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
    ) { 
        this.token = this.cookieService.get("accessToken");
    }


    async getAllUsers(): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.token}`,
        })
      }

      let response = await this.http.get(`${environment.apiURL}/auth/FindAllAsync`, httpOptions).toPromise();
      return response;
    }
}
