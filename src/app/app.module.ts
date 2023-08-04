import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Socket, SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

@Injectable()
export class SocketOne extends Socket {
  constructor() {
    super({ url: 'http://127.0.0.1:3000/one', options: {transports:['websocket']} });
  }
}

@Injectable()
export class SocketTwo extends Socket {
  constructor() {
    super({ url: 'http://127.0.0.1:3000/two', options: {transports:['websocket']} });
  }
}

@Injectable()
export class SocketRegular extends Socket {
  constructor() {
    super({ url: 'http://127.0.0.1:3000/', options: {transports:['websocket']} });
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule
  ],
  providers: [SocketOne, SocketTwo, SocketRegular],
  bootstrap: [AppComponent]
})
export class AppModule { }
