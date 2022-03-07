import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-video (editVedio)="onEdit($event)" title="video 1" description="this is vedio 1" url="#"></app-video>
    <app-video (editVedio)="onEdit($event)" title="video 2" description="this is vedio 2" url="#"></app-video>
  </div>`,
  styles: []
})
export class AppComponent {
  firstName:string="";
 
 
  changeName(){
    this.firstName="Manish"
  }
  onEdit(data: any){
    console.log(data)
  }
}