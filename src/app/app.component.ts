import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <label>Username</label>
    <input [(ngModel)]="firstName" placeholder="Please Enter Name" />
    <h1>{{firstName}}</h1>
    <button (click)="changeName()">Change Name</button>
  </div>`,
  styles: []
})
export class AppComponent {
  firstName:string="";
 
  changeName(){
    this.firstName="Manish"
  }
}