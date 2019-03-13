import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private route:Router) { }

    ngOnInit(){
 	  
      } 

    logout(){
      	console.log("inside logout");
      	firebase.auth().signOut().then(function() {
		     alert("signout successful");
		     }).catch(function(error) {		  
			  alert(" An error happened.");
		   });
     this.route.navigate(['/']);
    }
}
