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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  races: Race[] = [];
  weapons: Weapon[] = [];
  private charsCollection!: AngularFirestoreCollection<Character>;
  characters: Character[] = [];
  chars: any;
  constructor(public db: AngularFirestore) {
    db.collection<Race>('races')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.races.push(doc.data());
          console.log(this.races);
        });
      });
    db.collection<Weapon>('weapons')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.weapons.push(doc.data());
          console.log(this.weapons);
        });
      });
    db.collection<Character>('characters')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.characters.push(doc.data());
          console.log(this.characters);
        });
      });
  }
  ngOnInit(): void {}
  add(name: any, sex: any, race: any, weapon: any) {
    if (sex == 'Nam') {
      this.db.collection('character').add({
        name: name,
        sex: true,
        race: race,
        weapon: weapon,
      });
    } else if (sex == 'Nữ') {
      this.db.collection<Character>('characters').valueChanges({
        name: name,
        sex: false,
        race: race,
        weapon: weapon,
      });
    }
  }
}
