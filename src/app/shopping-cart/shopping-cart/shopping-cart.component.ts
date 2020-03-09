import { Component, OnInit } from '@angular/core';



import { ShoppingCartItem, OrderInfo } from 'src/app/travel.interface';
import { CartService } from 'src/app/cart.service';
import  { Mytrip } from 'src/app/mytrip';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
	items;
  checkoutForm;
  data: Mytrip[] = [];


  
  // order summary
  subTotal = 0;
  total = 0;

  constructor(private cartService: CartService ) {

}

  ngOnInit(): void {
   this.items = this.cartService.getItems();
   
  }
  

  /*getTotalPrice(item: Mytrip ) {
    this.subTotal = 0;
    for (const i of this.data) {
       
    this.subTotal = this.subTotal + +item.costPrice * item.quantity;
      }
      return this.subTotal;
}*/
// get the total price for all items currently in the cart
    
        

       /* getTotalPrice(id) {

        let total: any;
        total = 0;
        this.subTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (id === null || item.id === id) {

              this.subTotal = this.subTotal + +item.costPrice * item.quantity;
                 
                    /*total += item.quantity * +item.costPrice ;*/
               /* }
            }
            return this.subTotal;


    }*/

 }

  










