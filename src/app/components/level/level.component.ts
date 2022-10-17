import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  @Input() experience!: number;
  @Input() logo!: boolean;
  level!: number;
  barPercentage!: string;
  
  constructor(){
  }

  ngOnInit(): void {
    console.log(this.experience)
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
