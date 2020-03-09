import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { menus } from 'src/app/menus';
import { ShoppingCartItem, OrderInfo } from 'src/app/travel.interface';
import  { products } from 'src/app/products';





@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

menu;
infos = products ;



 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	/*this.route.paramMap.subscribe(params => {
   this.menu = menus[+params.get('menuId')];
  });*/
  
  

}


}





