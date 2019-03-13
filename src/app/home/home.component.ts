import { Component, OnInit,OnDestroy } from '@angular/core';
import {CreatpostService} from './../creatpost.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  post:any[]=[];
  sub:Subscription;
  constructor(private postService:CreatpostService) { }

  ngOnInit() {
   let dbdata = 	this.postService.getPost().snapshotChanges();
      this.sub = dbdata.subscribe(val=>{
  		this.post=[];

          let sortedListByDateDesc = val.slice().reverse(); 
  		    sortedListByDateDesc.forEach( data=>{
          let temp = data.payload.toJSON();
          temp["keyId"]= data.key;
          temp.dateposted = new Date(temp.dateposted).toLocaleString();
          if(temp.comments !== undefined && temp.comments !== null){
            temp.comments = Object.values(temp.comments);  
          }
          this.post.push(temp);
  		})
      // console.log("All post :: ", this.post);
  	})
  }

  saveComment(obj,key){
  	this.postService.updateComment(obj.comment,key);
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
