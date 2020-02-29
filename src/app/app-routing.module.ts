import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
import { HeaderComponent } from './header/header/header.component';
import { TravelComponent } from './mytravels/travel/travel.component';

const routes: Routes = [{
	path: "menus" , component: HeaderComponent
},{
	path: "travel" , component: TravelComponent
},{
	path: "", component: HeaderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
