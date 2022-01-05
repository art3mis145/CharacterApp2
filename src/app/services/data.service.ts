import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { Race } from '../models/race.model';
import { Weapon } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  characters!: Observable<Character[]>;
  races!: Observable<Race[]>;
  weapons!: Observable<Weapon[]>;
  items: Character[] = [];
  items2: Race[] = [];
  items3: Weapon[] = [];
  charDetail!: any;
  raceDetail!: any;
  weaponDetail!: any;
  chars: Character[] = [];
  count: Character[] = [];
  charID!: String[];

  constructor(public db: AngularFirestore) {
    this.characters = db
      .collection<Character>('character')
      .valueChanges({ idField: 'id' });
    this.characters.subscribe((data) => {
      this.items = data;
      console.log(this.characters);
    });
    this.races = db.collection<Race>('races').valueChanges({ idField: 'id' });
    this.races.subscribe((data) => {
      this.items2 = data;
    });

    this.weapons = db
      .collection<Weapon>('weapons')
      .valueChanges({ idField: 'id' });
    this.weapons.subscribe((data) => {
      this.items3 = data;
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
  getCharDetail(id: any) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].id == id) {
        this.charDetail = this.items[index];
      }
    }
  }

  raceNum() {
    this.db
      .collection<Character>('character', (ref) =>
        ref.where('race', '==', 'Mage')
      )
      .get()
      .toPromise()
      .then((query) => {
        query.forEach((doc) => {
          this.count.push(doc.data());
        });
      });
    let mageRace = 0;
    for (let index = 0; index < this.count.length; index++) {
      mageRace++;
    }
    return mageRace;
  }

  addChar(name: any, sex: any, race: any, weapon: any) {
    this.db.collection('character').add({
      name: name,
      sex: sex,
      race: race,
      weapon: weapon,
    });
  }
  delete(id: any) {
    this.db.collection('character').doc(id).delete();
  }
  update(id: any, name: any, sex: any, race: any, weapon: any) {
    this.db.collection('character').doc(id).update({
      name: name,
      sex: sex,
      race: race,
      weapon: weapon,
    });
  }
  search(name: any) {
    this.db
      .collection<Character>('character', (ref) =>
        ref.where('name', '==', name)
      )
      .get()
      .toPromise()
      .then((query) => {
        query.forEach((doc) => {
          this.chars.push(doc.data());
        });
      });
    return this.chars;
  }

  searchRace(name: any) {
    for (let index = 0; index < this.items2.length; index++) {
      if (this.items2[index].raceName == name) {
        this.raceDetail = this.items2[index];
      }
    }
  }
  searchWeapon(name: any) {
    for (let index = 0; index < this.items3.length; index++) {
      if (this.items3[index].weaponName == name) {
        this.weaponDetail = this.items3[index];
      }
    }
  }
  updateRaceWithCharId(name: any) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].name == name) {
        this.charID.push(this.items[index].name);
      }
      console.log(this.charID);
    }

    // for (let index = 0; index < this.items2.length; index++) {
    //   if (this.items2[index].raceName == name)
    //     this.db
    //       .collection('races')
    //       .doc(this.items2[index].id)
    //       .update({
    //         charsId: firebase.default.firestore.FieldValue.arrayUnion(
    //           this.charID
    //         ),
    //       });
    // }
  }
}
