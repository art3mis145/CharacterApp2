import { Component, Input, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Character } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { RaceDetailComponent } from '../race-detail/race-detail.component';
import { WeaponDetailComponent } from '../weapon-detail/weapon-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detail!: Character;
  constructor(
    public dataService: DataService,
    public windowService: NbWindowService
  ) {
    this.detail = dataService.charDetail;
  }

  ngOnInit(): void {}
  getRace(name: any) {
    this.dataService.searchRace(name);
  }
  getWeapon(name: any) {
    this.dataService.searchWeapon(name);
  }
  openRaceForm() {
    this.windowService.open(RaceDetailComponent, { title: 'Race Detail' });
  }
  openWeaponForm() {
    this.windowService.open(WeaponDetailComponent, { title: 'Weapon detail' });
  }
}
