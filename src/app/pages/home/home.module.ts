import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
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

@NgModule({
  declarations: [HomeComponent, FormComponent],
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
  ],
})
export class HomeModule {}
