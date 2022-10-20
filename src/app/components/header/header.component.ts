import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { Token } from 'src/app/shared/entity/token.entity';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token!: Token;
  level!: number;
  experience!: number;
  barPercentage!: string;
  page!: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    public userService: UserService
    ) {
      this.userService.getUserExp().then(response => {
        this.experience = response.Data
        this.getUserInfo();
      })
    }

  ngOnInit(): void {
    this.token = this.getDecodedAccessToken(this.cookieService.get('accessToken'));
    this.page = this.router.url.includes('ranking') ? 'ranking' : 'dashboard';
    (<HTMLElement>document.getElementsByClassName('progress-inner')[0]).innerText = '';
  }


  getUserInfo(){
    this.token = this.getDecodedAccessToken(this.cookieService.get('accessToken'));
    this.calculateUserExp(this.experience);
    this.barPercentage = '0';
  }

  calculateUserExp(exp: number){
    this.experience = exp % 100;
    this.level = Math.round(exp / 100);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(error) {
      return null;
    }
  }

  redirectToDashboard(){
    this.router.navigate(['dashboard'])
  }

  redirectToRanking(){
    this.router.navigate(['ranking'])
  }
}
