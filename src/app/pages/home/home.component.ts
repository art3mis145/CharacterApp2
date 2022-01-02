import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { NbWindowService } from '@nebular/theme';
import * as firebase from 'firebase/compat';
import { Character } from 'src/app/models/character.model';
import { Race } from 'src/app/models/race.model';
import { DataService } from 'src/app/services/data.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private raceCollection!: AngularFirestoreCollection<Race>;
  characterCollection!: AngularFirestoreCollection<Character>;
  characters: Character[] = [];
  chars: any;
  constructor(
    public dataService: DataService,
    private windowService: NbWindowService
  ) {}
  ngOnInit(): void {
    this.dataService.getChar().subscribe((character) => {
      this.characters = character;
    });
  }
  deleteChar(name: any) {
    this.dataService.delete(name);
  }

  openForm() {
    this.windowService.open(FormComponent, { title: `Create Character` });
  }
}
