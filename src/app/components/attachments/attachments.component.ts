import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { WeaponTypes } from 'src/app/models/weapontype';
import { attachmentTypes } from 'src/app/models/attachments';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.less'],
  providers:[DataService]
})
export class AttachmentsComponent implements OnInit {
  attachmentTypes:WeaponTypes[];
  attachmentList:attachmentTypes[]
  constructor(private dataService:DataService) { }

  ngOnInit() {
    
    this.dataService.getAttachmentTypes().subscribe(data => {
      this.attachmentTypes = data;
    })

    this.dataService.getAttachmentList().subscribe(data => {
      this.attachmentList = data;
    })

  }

  chooseAttachment(attachmentType){

    this.dataService.getAttachmentTypeList(attachmentType).subscribe(data => {
      this.attachmentList = data;
    })

  }

}
