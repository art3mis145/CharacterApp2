import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceTableRoutingModule } from './race-table-routing.module';
import { RaceTableComponent } from './race-table.component';
import {
  NbAutocompleteModule,
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RaceTableComponent],
  imports: [
    CommonModule,
    RaceTableRoutingModule,
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
export class RaceTableModule {}
