import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
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

      let response = await this.http.get(`${environment.apiURL}/module/FindAllAsync`, httpOptions).toPromise();
      return response;
    }

    async getModuleById(id: number): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.token}`,
        })
      }

      let response = await this.http.get(`${environment.apiURL}/module/GetOne?Id=${id}`, httpOptions).toPromise();
      return response;
    }

    async getModuleWithQuestion(id: number): Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'observe':'body',
          'responseType': 'json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.token}`,
        })
      }

      let response = await this.http.get(`${environment.apiURL}/module/GetWithQuestion?Id=${id}`, httpOptions).toPromise();
      return response;
    }
}
