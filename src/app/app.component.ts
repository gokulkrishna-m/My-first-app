import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h1{
      color:red;
    }
  `]
})
export class AppComponent {
  //name = 'Gokul Krishna';
  serverElements = [{type:'server',name:'Test Server',content:'Just a content!'}];

  currentItem = 'TV';

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{blueprintName:string, blueprintContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
}
