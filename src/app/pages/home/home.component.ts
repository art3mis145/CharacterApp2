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
import { map } from 'rxjs/operators';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  chars!: any;
  inputCharsControl!: FormControl;

  constructor(
    public db: AngularFirestore,
    public dataService: DataService,
    private windowService: NbWindowService,
    public auth: AuthService
  ) {}
  ngOnInit(): void {
    this.dataService.getChar().subscribe((data) => {
      this.characters = data;
    });
  }
  deleteChar(id: any) {
    this.dataService.delete(id);
  }
  getDetail(id: any) {
    this.dataService.getCharDetail(id);
  }
  searchChar() {
    let keyword = (<HTMLInputElement>document.getElementById('keyword')).value;
    if (keyword.trim()) {
      this.characters = this.dataService.search(keyword.trim());
    } else {
      this.dataService.getChar().subscribe((data) => {
        this.characters = data;
      });
    }
  }
  openForm() {
    this.windowService.open(FormComponent, { title: `Create Character` });
  }
  openDetailForm() {
    this.windowService.open(DetailComponent, { title: `Character Detail` });
  }
  openUpdateForm() {
    this.windowService.open(UpdateComponent, { title: 'Update Character' });
  }
  onLogout() {
    this.auth.logout();
  }
}
