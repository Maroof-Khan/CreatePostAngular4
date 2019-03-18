import { Component, OnInit } from '@angular/core';
import {CreatpostService} from './../creatpost.service';
import Quill from 'quill';
// import { ImageResize } from 'quill-image-resize-module';
// Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
    postTitle;
    editorOptions;
    editorContent;
  constructor(private postService:CreatpostService) { }
 
  ngOnInit() {
   // console.log("editor  ::",this.editorContent);
   this.editorContent = '<h3>Type Something...</h3>';
   this.editorOptions = {
        toolbar: {
            container:
            [
                ['bold', 'italic', 'underline', 'strike'],       
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],     
                [{ 'indent': '-1' }, { 'indent': '+1' }],         
                [{ 'direction': 'rtl' }],                         

                [{ 'size': ['small', false, 'large', 'huge'] }],  
                [{ 'header': [1, 2, 3,4,5,6,false] }],

                [{ 'color': [] }, { 'background': [] }],         
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
                                                   

            ],
    
            handlers: {
                "placeholder": function (value) { 
                    if (value) {
                        const cursorPosition = this.quill.getSelection().index;
                        this.quill.insertText(cursorPosition, value);
                        this.quill.setSelection(cursorPosition + value.length);
                    }
                }
            }
        }
        // modules: {
        //   imageResize: {}
        // }  
      }
  }

  submit(){
    // console.log(this.postTitle);
    // console.log(this.editorContent);
    let post={
        title:this.postTitle,
        description:this.editorContent,
        dateposted:new Date().getTime()
     }
     // console.log(post);
     
     this.postService.saveData(post);
  }

  onContentChanged(event){
    // console.log(event.html);
  }
}
