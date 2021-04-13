import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  @ViewChild('servercontent') servercontent: ElementRef; //to access the input value directly from the ts file without passing to fn arg

  @Input() item: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log(serverName.value);
    // console.log(carname.value);
    // this.servercontent.nativeElement.value = 'gokulkrishna';
    this.serverCreated.emit({ serverName: serverName.value, serverContent: this.servercontent.nativeElement.value });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log(this.servercontent.nativeElement.value);
    console.log(this.servercontent.nativeElement);

    this.blueprintCreated.emit({ blueprintName: serverName.value, blueprintContent: this.servercontent.nativeElement.value })
  }
}
