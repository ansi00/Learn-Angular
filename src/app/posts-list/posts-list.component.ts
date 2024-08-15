import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CardComponent],
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
}
