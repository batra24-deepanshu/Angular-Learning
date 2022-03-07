import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <label>UserName</label>
    <input (input)="getFirstName($event)"  placeholder="Enter UserName"/>
    <button (click)="saveUserName()">Save Name</button>
    <h1>Your Name is : {{displayName}}</h1>
  </div>`,
  styles: []
})
export class AppComponent {
  firstName:string="";
  displayName:string=""
  
 getFirstName(data:any){
   this.firstName=data.target.value;
 }
 saveUserName(){
   this.displayName=this.firstName;
 }
}