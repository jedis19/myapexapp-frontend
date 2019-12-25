import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CharacterType } from 'src/app/models/charactertype';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
  providers:[DataService]
})
export class CharactersComponent implements OnInit {
  characters:CharacterType[]
  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getCharacterTypes().subscribe(data => {
     this.characters = data;
    })
  }

}
