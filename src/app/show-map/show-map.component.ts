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
  constructor() { }

   ngOnInit() {
	  	this.lat = 28.569885199999998;
	    this.lng = 77.259;
	    function success(position) {
	    this.lat  = position.coords.latitude;
	    this.lng = position.coords.longitude;
	     // console.log("lat ::"+this.lat+"lng ::"+this.lng);
	    }
	    function error() {
	    	this.text = 'Unable to retrieve your location';
	    }

	    if (!navigator.geolocation) {
	    this.text = 'Geolocation is not supported by your browser';
	    } else {
	    this.text = 'Locating…';
	    // console.log("lat in callback ::" +this.lat+"lng callback ::"+this.lng);
	    navigator.geolocation.getCurrentPosition(success, error);
	   }
	   
	    // console.log("lat in k ::" +this.lat+"lng k ::"+this.lng);

  }

}
