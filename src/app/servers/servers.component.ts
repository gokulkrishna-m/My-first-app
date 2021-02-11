import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  s1 = 'No server was created!'
  s2 = 'Test Gokul';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

   }

  ngOnInit(): void {
  }
  
  onServerCreated(){
    this.s1 = 'Server created successfully...!! and the Name is '+this.s2;
  }

  serverUpdate(event:Event){
    console.log(event);
    this.s2 = (<HTMLInputElement>event.target).value;
  }
}