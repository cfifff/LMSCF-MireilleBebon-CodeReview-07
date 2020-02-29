import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/service/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
 	menus: any[];
 	lastUpdate = new Promise((resolve, reject) => {
    const page = new Page();
    setTimeout(
      () => {
        resolve(page);
      }, 2000
    );
  });

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
     hasPage: true,
    	page: [{
      
      redirect: "travel"}],
    
   },{
     name:"CONTACT",
     haspage: false,
    	page: [{
      
      redirect: "Category 1"}],
   }
 ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  	 this.menus= this.dataService.menus;
  }
  onAllumer() {
    this.dataService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.dataService.switchOffAll();
    } else {
      return null;
    }

}
}