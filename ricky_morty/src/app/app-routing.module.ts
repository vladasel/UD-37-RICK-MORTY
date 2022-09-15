import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';

const routes: Routes = [
  {
    path:"characters",
    component:CharactersComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent

  },
  {
    path:"more",
    component:SeeMoreComponent
  },
  {
    path:"new",
    component:AddCharacterComponent
  },
  {
    path:"update",
    component:UpdateCharacterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
