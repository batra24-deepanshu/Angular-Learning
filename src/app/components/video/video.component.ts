import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-video',
  template: `<div>
    <h2>{{title}}</h2>
    <h3>{{description}}</h3>
    <a [href]="url">Click to watch</a>
    <button (click)="onClick()">Edit Vedio</button>
  </div>`,
  styles: []
})
export class VideoComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() url: string | undefined;
  @Output() editVedio:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.editVedio.emit(this.title);
  }

}
