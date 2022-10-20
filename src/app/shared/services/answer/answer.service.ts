import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { CookieService } from 'ngx-cookie-service';
import { Answer } from '../../entity/answer.entity';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
    public answer!: Answer[];
    
    token!: string;

    constructor(
      private router: Router,
      private http: HttpClient,
      private cookieService: CookieService
      ) { 
          this.token = this.cookieService.get("accessToken");
      }

    async getAnswersByModuleId(moduleId: number): Promise<any>{
        const httpOptions = {
          headers: new HttpHeaders({
            'content-type': 'application/json',
            'observe':'body',
            'responseType': 'json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${this.token}`,
          })
        }

        let response = await this.http.get(`${environment.apiURL}/answer/GetAnswerByQuestionId?Id=${moduleId}`, httpOptions).toPromise();
        return response;
    }

}
