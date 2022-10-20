import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { Token } from '../../entity/token.entity';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CompletedModulesService {
    token!: Token;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
    ) { 
    }


    async completeModule(moduleId: number, exp: number): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.token}`,
        })
      }
      
      this.token = this.getDecodedAccessToken(this.cookieService.get('accessToken'))

      let body = JSON.stringify({userId: this.token.id, moduleId: moduleId, experience: exp})

      let response = await this.http.post(`${environment.apiURL}/CompletedModule/CreateAsync`, body, httpOptions).toPromise();
      return response;
    }

    async getCompleteModules(): Promise<any>{
        const httpOptions = {
          headers: new HttpHeaders({
            'content-type': 'application/json',
            'observe':'body',
            'responseType': 'json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${this.token}`,
          })
        }
        
        this.token = this.getDecodedAccessToken(this.cookieService.get('accessToken'))

        let response = await this.http.get(`${environment.apiURL}/CompletedModule/GetByUser?Id=${this.token.id}`, httpOptions).toPromise();
        return response;
      }

    getDecodedAccessToken(token: string): any {
        try {
          return jwt_decode(token);
        } catch(error) {
          return null;
        }
      }
}
