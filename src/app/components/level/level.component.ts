import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit, AfterViewInit {
  @Input() experience!: number;
  @Input() logo!: boolean;
  level!: number;
  barPercentage!: string;
  
  constructor(){
  }
  ngAfterViewInit(): void {
    this.getExp();
  }

  ngOnInit(): void {
    this.getExp();
  }

  getExp(){
    this.calculateUserExp(this.experience);
    this.barPercentage = this.experience.toString();
  }

  calculateUserExp(exp: number){
    this.experience = exp % 100;
    this.level = Math.round(exp / 100);
  }
}
