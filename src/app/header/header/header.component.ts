import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { menus } from 'src/app/menus';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	 /*menus = menus;

 	
/*Menu: any[];
 	

	menus = [
   {
     name: "HOME",
      haspage: false,
    	page: [{}],
      
     
   },{
     name: "BLOG",
     haspage: false,
    	page: [{
      
      redirect: "Category 1"}],
    
   },{
     name:"TRAVEL",
     hasPage: false,
    	page: [{
      
      redirect: "travel"}],
    
   },{
     name:"CONTACT",
     haspage: false,
    	page: [{
      
      redirect: "Category 1"}],
   }
 ];*/

  constructor(private route: ActivatedRoute) { }
menu;
  ngOnInit(): void {
  	 this.route.paramMap.subscribe(params => {
   this.menu = menus[+params.get('menuId')];
  });
  }
  /*goToPage(pageName:string):void {
    this.router.navigate(['travel'])
  }

  
 /* onAllumer() {
    this.dataService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.dataService.switchOffAll();
    } else {
      return null;
    }

}*/
}