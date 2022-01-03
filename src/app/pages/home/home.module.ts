import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  NbAutocompleteModule,
  NbButton,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbOptionModule,
  NbSelectModule,
  NbWindowModule,
} from '@nebular/theme';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
import { RaceDetailComponent } from './components/race-detail/race-detail.component';
import { WeaponDetailComponent } from './components/weapon-detail/weapon-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    DetailComponent,
    UpdateComponent,
    RaceDetailComponent,
    WeaponDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbListModule,
    NbLayoutModule,
    NbIconModule,
    NbWindowModule.forChild(),
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbOptionModule,
    FormsModule,
    ReactiveFormsModule,
    NbAutocompleteModule,
  ],
})
export class HomeModule {}
