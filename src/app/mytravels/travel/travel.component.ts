import { Component, OnInit } from '@angular/core';
import {TravelService} from 'src/app/service/travel.service'
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

 travelStatus: boolean;

  constructor() { }

  ngOnInit(): void {
  	this.travelStatus = this.TravelService.isTravel;
  }
  onSignIn() {
    this.TravelService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.travelStatus = this.TravelService.isTravel;
      }
    );
  }

  onSignOut() {
    this.TravelService.signOut();
    this.travelStatus = this.TravelService.isTravel;
  }

}
