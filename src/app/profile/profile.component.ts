import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

 @Input() pUsername : string = '';
 counter : number = 0 ;

constructor(){
  // console.log("Constructor Trigerred");
  // console.log(this.pUsername);
  
}

Increase(){
  // this.counter++;
}

ngOnInit(): void {
  // console.log("OnInit Trigerred");
  // console.log(this.pUsername);
  
}

ngOnChanges() {
  // console.log("Onchanges Trigerred");
  
}

ngDoCheck(): void {
  // console.log("DoCheck Trigerred");
  
}

ngAfterContentInit(): void {
  console.log("AfterInit Trigerred");
  
}

ngAfterContentChecked(): void {
  console.log("AfterContentChecked Trigerred");
  
}

ngAfterViewInit(): void {
  console.log("AfterViewInit Trigerred");
  
}

ngAfterViewChecked(): void {
  console.log("AfterViewChecked Trigerred");
  
}

ngOnDestroy(): void {
  console.log("onDestroy Trigerred");
  
}

}
