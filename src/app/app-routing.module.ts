import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { CharactersComponent } from './components/characters/characters.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const routes: Routes = [
  {path:"",component:MainpageComponent},
  {path:"weapons",component:WeaponsComponent},
  {path:"characters",component:CharactersComponent},
  {path:"attachments",component:AttachmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
