import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserFollowers } from 'src/app/models/user-followers';
import { ErrorService } from 'src/app/services/error/error.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent {
  private _users: User[] = [];

  @Input() set users(value: User[]) {
    this._users = value;
    this.createChart();
  }

  usersFollowers = new Map<string, number>();
  options = {} as EChartsOption;

  constructor (
    private readonly usersService: UsersService,
    private readonly errorService: ErrorService
  ) { }

  private get followersObservables(): Observable<any>[] {
    const followersObservables: Observable<any>[] = [];
    
    this._users.forEach(user => {
      followersObservables.push(
        this.usersService.getFollowers(user.login)
          .pipe(map((followers: User[]): UserFollowers => { 
              return { 
                User: user, 
                Followers: followers 
              };
            })
          )
      );
    });

    return followersObservables;
  } 

  private createChart(): void {
    this.options = {};
    this.usersFollowers = new Map<string, number>();
    
    forkJoin(this.followersObservables).subscribe(userFollowers => {
      userFollowers.forEach((user: UserFollowers) => {
        this.usersFollowers.set(user.User.login, user.Followers.length);
      });

      this.setChartOptions();
    },
    error => {
      this.errorService.showError(error.error.message);
    });
  }  

  private setChartOptions(): void {
    this.options = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: [ ...this.usersFollowers.keys() ],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Followers',
          type: 'bar',
          barWidth: '60%',
          data: [ ...this.usersFollowers.values() ]
        },
      ],
    }
  }
}
