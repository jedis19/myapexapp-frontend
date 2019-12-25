import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeaponTypes } from '../models/weapontype';
import { tap } from 'rxjs/operators';
import { WeaponList } from '../models/weaponlist';
import { CharacterType } from '../models/charactertype';
import { attachmentTypes } from '../models/attachments';

@Injectable()
export class DataService {
  path="https://guidebackend.herokuapp.com/"
  constructor(private http:HttpClient ) { }
  
 getWeaponTypes():Observable<WeaponTypes[]>{
   return this.http.get<WeaponTypes[]>(this.path+"weaponTypes");
 }

 //weapons list by weapon type
 getWeaponTypeList(weaponType):Observable<WeaponList[]>{
  return this.http.get<WeaponList[]>(this.path+"weapons"+"?type="+weaponType)
 }

 //all weapons
 getWeaponList():Observable<WeaponList[]>{
   return this.http.get<WeaponList[]>(this.path+"weapons")
 }
//get characters and specs
 getCharacterTypes():Observable<CharacterType[]>{
   return this.http.get<CharacterType[]>(this.path+"characterTypes");
 }
//attachment types
 getAttachmentTypes():Observable<WeaponTypes[]>{
   return this.http.get<WeaponTypes[]>(this.path+"attachmentTypes");
 }
//all attachments
 getAttachmentList():Observable<attachmentTypes[]>{
   return this.http.get<attachmentTypes[]>(this.path+"attachmentList")
 }

 //attachment list by attachment type
 getAttachmentTypeList(attachmentType):Observable<attachmentTypes[]>{
  
  return this.http.get<attachmentTypes[]>(this.path+"attachmentList?type="+attachmentType)


 }

 
}
