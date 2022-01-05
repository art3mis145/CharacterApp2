import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceTableComponent } from './race-table.component';

const routes: Routes = [{ path: '', component: RaceTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceTableRoutingModule { }
