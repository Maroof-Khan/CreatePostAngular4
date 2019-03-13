import { Component, OnInit } from '@angular/core';
import {CreatpostService} from './../creatpost.service';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(private postService:CreatpostService) { }

  ngOnInit() {
  }
  
  submit(postObject){
    // console.log("title "+postObject.image);
    let post={
        title:postObject.title,
        description:postObject.description,
        image:postObject.image,
        dateposted:new Date().getTime()
     }
     
     this.postService.saveData(post);
  }
}
