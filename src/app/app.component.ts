import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{firstName}} {{getlastName()}} , Welcome to Akal Information</h1><p>Your Roll No : {{rollno}}</p><button [disabled]="isButtonDisabled">Submit</button>`,
  styles: []
})
export class AppComponent {
  firstName:string="Deepanshu";
  lastname:string="batra";
  rollno:number=21033;
  isButtonDisabled:boolean=false;
  getlastName(){
    return this.lastname;
  }
}