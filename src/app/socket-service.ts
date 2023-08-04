import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  constructor(private socket: Socket) { }

  sendMessage(namespace: string, msg: string) {
    this.socket.emit("message",msg);
  }
  getMessage() {
    return this.socket.fromEvent('toClient');
  }

}
