import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('Constructor called..!!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called..!!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called..!!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called..!!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called..!!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called..!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called..!!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called..!!');
  }
}
