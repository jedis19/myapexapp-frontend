import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { WeaponTypes } from 'src/app/models/weapontype';
import { WeaponList } from 'src/app/models/weaponlist';



@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.less'],
  providers:[DataService]
 
})
export class WeaponsComponent implements OnInit {
  weaponTypes:WeaponTypes[];
  weaponList:WeaponList[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
  this.dataService.getWeaponTypes().subscribe(data => {
    this.weaponTypes = data
  })
  this.dataService.getWeaponList().subscribe(data => {
    this.weaponList = data;
  })
  }

  chooseWeapon(type){
    this.dataService.getWeaponTypeList(type).subscribe(data => {
      this.weaponList = data;
    })
  }

}
