import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SocketIoService } from './socket-service';
import { Socket } from 'ngx-socket-io';
import { SocketOne, SocketRegular, SocketTwo } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    await this.regular.disconnect();
  }

  serverMessage: string[]=[]

  ConnectToRoom() {
    this.regular.emit("joinToRoom", "huinya")
  
  }
  ExitFromRoom() {
    this.regular.emit("leaveRoom", "huinya")
  
  }



  // constructor(private one: SocketOne, private two: SocketTwo) { }
  constructor(private regular: SocketTwo) { }
  ngOnInit(): void {
    this.regular.fromEvent("srvmsg").subscribe((d: any)=>{
      this.serverMessage.push(d)
    })
  }


  title = 'sockIoClient';
}
