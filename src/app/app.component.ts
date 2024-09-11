import { Component, ViewChild, AfterViewInit, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppNavbar} from './navbar/navbar.component'
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault,NgClass, NgComponentOutlet, UpperCasePipe,LowerCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, SlicePipe } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar,HeaderComponent,PostsListComponent,DatePipe,SlicePipe,JsonPipe,CurrencyPipe,PercentPipe,DecimalPipe,TitleCasePipe,LowerCasePipe,PostsListComponent,UpperCasePipe,CardComponent,ProfileComponent,NgComponentOutlet, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase,NgClass, NgSwitchDefault, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
//   title: string = 'this is loaded dynamically';
//   imageUrl: string = "data:image/jpeg;base64,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"
//   isDisabled: boolean = true;
//   isActive: boolean = true;
//   fruitName: string = "Orange";

//   userName: string = "John Doe";


//   buttonClick(){
//     console.log("Button works");
    
//   }

//   mouseOver(){
//     console.log("Mouse moving over button");
    
//   }

//   keyPressed(event : any){
//     console.log(event.keyCode)
    
//   }
//   enterkeyPressed(){
//     console.log("Enter Key Pressed")
    
//   }

//   captureValue(user:HTMLInputElement){
// console.log(user.value);

//   }

//   updateUsername(user: HTMLInputElement) {
//     this.userName = user.value;
//     console.log(this.userName);
//   }


// isLoggedIn : boolean = false;
// userName : string = 'John Doe'
  

// buttonClicks : number = 0;

// loginAttempts(){
//   this.buttonClicks++ ;
//   console.log(this.buttonClicks);
  
// }

// Role : string = "isAdmi";

// users : string [] = ['Anas','Ali','Ahmad','Hamza','Atta']

// usersObj : Array <any> = [];
// {id : 1, name :"Anas", isEmployed : false}, {id : 2, name :"Ali", isEmployed : true},
// {id : 3, name :"Ahmad", isEmployed : true}, {id : 4, name :"Atta", isEmployed : false},
// {id : 5, name :"Asif", isEmployed : true}, {id : 4, name :"Aaziq", isEmployed : true}

// constructor(){
//  console.log(this.usersObj.length);
  
// }

// addNewUser(){
// let  user = 
//   {id : 5, name :"Habib", isEmployed : true}

// this.usersObj.push(user);
// }

// deleteUser(user:number){
// this.usersObj.splice(user ,1);


// }



// usersRole : string = "Member";

// isLoggedIn : boolean = true;

// titleFromParent : string = "Post 1";
// userLoggedIn : boolean = true;

// Data from child to parent component

// @ViewChild(PostsListComponent) childMessage : any;
// message: string = '';
// messageFromParent : string = '';



// ngAfterViewInit(): void {
  
//   this.message = this.childMessage.childMessage;
// }

// receiveMessage(message:string){
// this.messageFromParent = message;
// }

// constructor(private viewContainer : ViewContainerRef){

// }

// loadComponent(){
//   this.viewContainer.createComponent(PostsListComponent)
// }

// removeComponent(){
//   this.viewContainer.remove();
// }

// username : string = "JohnDoe"


// pipes in angular

// title : string = 'Angular pipes';

// today = new Date();

userService : any ;

constructor(private userServiceDI : UserService) {
 this.userService =  userServiceDI;
 
 
}


// template driven forms

formSubmit(f:any){
console.log(f.value);

}

getValue(fullName :any){
console.log(fullName);

}

}
