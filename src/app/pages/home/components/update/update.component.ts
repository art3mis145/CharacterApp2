import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Race } from 'src/app/models/race.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  detail!: Character;
  races: Race[] = [];
  weapons: Weapon[] = [];
  updateRace: any;
  updateWeapon: any;
  updateSex: any;
  constructor(public dataService: DataService) {
    this.detail = dataService.charDetail;
    dataService.getRace().subscribe((race) => {
      this.races = race;
      console.log(this.races);
    });
    dataService.getWeapon().subscribe((weapon) => {
      this.weapons = weapon;
      console.log(this.weapons);
    });
  }

  updateChar(id: any, name: any, sex: any, race: any, weapon: any) {
    if (sex == 'Nam') {
      this.dataService.update(id, name, sex == true, race, weapon);
    } else {
      this.dataService.update(id, name, sex == false, race, weapon);
    }
  }

  ngOnInit(): void {}
}
