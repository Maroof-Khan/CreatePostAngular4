import { Component, OnInit,OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Subscription} from 'rxjs/Subscription';
import {AngularFireModule} from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
   id:string;
   sub:Subscription;
  constructor(private router : Router,
              private afAuth : AngularFireAuth
    ){
   }

  ngOnInit() {
       this.sub = this.afAuth.authState.subscribe(user=>{
       this.id = user.uid;
        if(this.id){
          this.router.navigate(['/createpost']);
        }
    });
  }
 login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(provider).then(res=>{
      // console.log("provider ::",res);
    });
    // this.router.navigate(['/createpost']);
    
 }

 ngOnDestroy(){
   this.sub.unsubscribe();
 }
}
