import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
// import {AngularFireDatabase}  from ''

@Injectable({
  providedIn: 'root'
})
export class CreatpostService {

   constructor(private db:AngularFireDatabase) { }
    saveData(obj){
   return this.db.list('/post').push(obj);

  }

  getPost(){
    return this.db.list('/post');
  	// return this.db.list('/post', ref => ref.orderByChild('dateposted'));
  }

  updateComment(value,postId:string){
    this.db.list('/post/'+postId+'/comments').push(value);
  }
}
