import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from '@firebase/util';
import * as firebase from '@angular/fire/compat';
import { Character } from 'src/app/models/character.model';
import { Race } from 'src/app/models/race.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  selectedRace!: any;
  selectedWeapon!: any;
  selectedSex!: any;
  races: Race[] = [];
  weapons: Weapon[] = [];
  constructor(public db: AngularFirestore, public dataService: DataService) {
    this.races = this.dataService.getRace();
    this.weapons = this.dataService.getWeapon();
  }
  ngOnInit(): void {}
  add(name: any, sex: any, race: any, weapon: any) {
    if (sex == 'Nam') {
      this.dataService.addChar(name, sex == true, race, weapon);
    } else if (sex == 'Nữ') {
      this.dataService.addChar(name, sex == false, race, weapon);
    }
  }
}
