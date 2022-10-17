import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/entity/user.entity';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  users!: User[];
  topUsers!: User[];

  constructor(private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().then(response => {
      this.users = response.Data
      this.topUsers = this.users.slice(0,3)
      this.users = this.users.slice(3, this.users.length);
    });
    
  }

  getDate(date:Date){
    let auxDate = new Date(date)
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth() + 1).toString(); // Months start at 0!
    let dd = (today.getDate()).toString();

    if (parseInt(dd) < 10) dd = '0' + dd;
    if (parseInt(mm) < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  }
}
