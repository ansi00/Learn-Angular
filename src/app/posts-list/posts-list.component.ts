import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserService } from '../services/user.service';
import { JsonPipe, NgFor } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';




@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CardComponent,JsonPipe,NgFor],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
//  @Input() Title1 : string = '';
//  @Input() userStatus : Boolean = true; 

 childMessage : string = "Hello from child component";

 parentMessage : string = "Message from child to parent using click emitter";

 @Output() messageEvent = new EventEmitter();

 SendMessage(){
  this.messageEvent.emit(this.parentMessage);
 }

 // Dependency Injection

userService : any ;
posts : Array<any> ;


addPost(){
  let newPost : Post = {id:6 , title : "Post Title 6" , post : "Dummy Post 6"};
  this.postServiceDI.addPostService(newPost);
}

 constructor(private userServiceDI : UserService, private postServiceDI : PostService) {
  this.userService =  userServiceDI;
  this.posts = postServiceDI.getPost();
  
 }
}
