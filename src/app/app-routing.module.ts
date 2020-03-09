import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header/header.component';
import { ContentComponent } from './header/content/content.component';
import { TravelComponent } from './mytravels/travel/travel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
 import { BlogComponent } from './blog/blog.component';
 import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
 import { NotFoundComponent } from './not-found/not-found.component';


 


const routes: Routes = [{
	
path:"", component: ContentComponent,

  /* path: '', redirectTo: '/header', pathMatch: 'full'*/ 
   
  },{
   path: 'HOME', component: ContentComponent 
 },{
   path: 'travel', component: TravelComponent 
 }, {
  
  path: 'infos/:infoId', component: ProductDetailComponent
   
  },{
   path: 'our inspirations', component: BlogComponent 
  },{
   path: 'shopping-cart', component: ShoppingCartComponent 

 }, {
  path: '**', component: NotFoundComponent 
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
