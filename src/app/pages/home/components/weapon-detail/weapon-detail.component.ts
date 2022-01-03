import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/weapon.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss'],
})
export class WeaponDetailComponent implements OnInit {
  detail!: Weapon;
  constructor(public dataService: DataService) {
    this.detail = this.dataService.weaponDetail;
  }

  ngOnInit(): void {}
}
