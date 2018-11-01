import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
          <h2> Welcome {{ name }}</h2>
          <button (click)="fireEvent()">Greet</button>


          <input [(ngModel)]="enter" type="text" #ivalue>
          {{enter}}
          <button (click)="onclick(ivalue.value)">Click Me</button> 
          <br>
          <div *ngIf="check">
            Welcome {{temp}}
          </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

    temp;
    check=false;
    public enter;
  @Input('parentData') name="";
  @Output() public childEvent =  new EventEmitter();
  onclick(value) {
    this.temp=value;
    if(value!="")
      this.check=true;
    else
      this.check=false;
  }

  fireEvent() {
    this.childEvent.emit('Mr. Pramod');
  }


  ngOnInit() {
  }

}
