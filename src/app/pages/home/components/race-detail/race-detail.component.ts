import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss'],
})
export class RaceDetailComponent implements OnInit {
  detail: Race;
  constructor(public dataService: DataService) {
    this.detail = this.dataService.raceDetail;
    console.log(this.detail);
  }

  ngOnInit(): void {}
}
