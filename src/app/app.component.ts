import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{firstName}} {{getlastName()}} , Welcome to Akal Information</h1><p>Your Roll No : {{rollno}}</p>`,
  styles: []
})
export class AppComponent {
  firstName:string="Deepanshu";
  lastname:string="batra";
  rollno:number=21033;
  getlastName(){
    return this.lastname;
  }
}