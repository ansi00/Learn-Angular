import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
 @Input() Title1 : string = '';
 @Input() userStatus : Boolean = true; 
}
