import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nivel: number;
  barPercentage: string;
  page: string;

  constructor(private router: Router) {
    this.nivel = 5;
    this.page = '';
    this.barPercentage = '0';
  }

  ngOnInit(): void {
    this.page = this.router.url.includes('ranking') ? 'ranking' : 'dashboard';
    this.barPercentage = '80';
    (<HTMLElement>document.getElementsByClassName('progress-inner')[0]).innerText = '';
  }
}
