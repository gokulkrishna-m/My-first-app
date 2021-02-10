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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

   }

  ngOnInit(): void {
  }
  
  onServerCreated(){
    this.s1 = 'Server created successfully...!!';
  }
}