import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';




import { menus } from 'src/app/menus';
import { products } from 'src/app/products';



//service




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ContentComponent } from './header/content/content.component';
import { TravelComponent } from './mytravels/travel/travel.component';
import { BlogComponent } from './blog/blog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TravelComponent,
    BlogComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    FrontPageComponent,
    NotFoundComponent,
     
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
