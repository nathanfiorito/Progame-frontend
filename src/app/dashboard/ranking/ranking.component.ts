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
  usersCount!: number;
  topUsers!: User[];

  constructor(private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().then(response => {
      this.users = response.Data
      this.users.sort((a, b) => b.Experience - a.Experience);
      this.usersCount = this.users.length;
      this.topUsers = this.users.slice(0,3)
      this.users = this.users.slice(3, this.users.length);
    });
    
  }

  getDate(date:Date){
    let auxDate = new Date(date)
    const yyyy = auxDate.getFullYear();
    let mm = (auxDate.getMonth() + 1).toString(); // Months start at 0!
    let dd = (auxDate.getDate()).toString();

    if (parseInt(dd) < 10) dd = '0' + dd;
    if (parseInt(mm) < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  }
}
