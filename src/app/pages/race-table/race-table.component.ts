import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-race-table',
  templateUrl: './race-table.component.html',
  styleUrls: ['./race-table.component.scss'],
})
export class RaceTableComponent implements OnInit {
  races: Race[] = [];
  raceNum!: any;
  constructor(public auth: AuthService, public dataService: DataService) {
    this.raceNum = this.dataService.raceNum();
    console.log(this.raceNum);
  }

  ngOnInit(): void {
    this.dataService.getRace().subscribe((data) => {
      this.races = data;
    });
  }
  onLogout() {
    this.auth.logout();
  }
}
