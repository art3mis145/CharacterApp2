import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detail!: Character;
  constructor(dataService: DataService) {
    this.detail = dataService.charDetail;
  }

  ngOnInit(): void {}
}
