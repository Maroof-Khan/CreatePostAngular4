import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.css']
})
export class ShowMapComponent implements OnInit {
   lat:number;
   lng:number;
   text:string;
   hasData: boolean;
  constructor() { this.hasData = false;}

   ngOnInit() {
	    if (!navigator.geolocation) {
	    	this.text = 'Geolocation is not supported by your browser';
	    } else {
	    	this.text = 'Locating…';
	    	navigator.geolocation.getCurrentPosition(position => {
    		this.lat  = position.coords.latitude;
	    	this.lng = position.coords.longitude;
	    	this.hasData = true;
	    	// console.log("Data is recieved :: " + `lat ${this.lat}  lng ${this.lng} hasData ${this.hasData}`);
	    }, error => {
	    	this.hasData = false;
	    	this.text = 'Unable to retrieve your location';
	    	// console.log("hasData :: " + this.hasData);
	    });
	   }
  }

}
