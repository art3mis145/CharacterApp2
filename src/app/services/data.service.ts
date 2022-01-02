import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { Race } from '../models/race.model';
import { Weapon } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  characters!: Observable<Character[]>;
  races: Race[] = [];
  weapons: Weapon[] = [];
  constructor(public db: AngularFirestore) {
    this.characters = db
      .collection<Character>('character')
      .valueChanges({ idField: 'id' });

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
  }
  getChar() {
    return this.characters;
  }
  getRace() {
    return this.races;
  }
  getWeapon() {
    return this.weapons;
  }
  addChar(name: any, sex: any, race: any, weapon: any) {
    this.db.collection('character').add({
      name: name,
      sex: sex,
      race: race,
      weapon: weapon,
    });
  }
  delete(name: any) {
    this.db.collection('character').doc();
  }
}
