import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { NbWindowService } from '@nebular/theme';
import * as firebase from 'firebase/compat';
import { Race } from 'src/app/models/race.model';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private raceCollection!: AngularFirestoreCollection<Race>;
  races: Race[] = [];
  constructor(
    public db: AngularFirestore,
    private windowService: NbWindowService
  ) {
    db.collection<Race>('races')
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.races.push(doc.data());
          console.log(this.races);
        });
      });
  }
  ngOnInit(): void {}

  openForm() {
    this.windowService.open(FormComponent, { title: `Create Character` });
  }
}
