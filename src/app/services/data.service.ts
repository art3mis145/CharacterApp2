import { query } from '@angular/animations';
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
  races!: Observable<Race[]>;
  weapons!: Observable<Weapon[]>;
  items: Character[] = [];
  charDetail!: any;
  chars: Character[] = [];
  constructor(public db: AngularFirestore) {
    this.characters = db
      .collection<Character>('character')
      .valueChanges({ idField: 'id' });

    this.races = db.collection<Race>('races').valueChanges({ idField: 'id' });
    this.weapons = db
      .collection<Weapon>('weapons')
      .valueChanges({ idField: 'id' });

    this.characters.subscribe((data) => {
      this.items = data;
      console.log(this.characters);
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
}
