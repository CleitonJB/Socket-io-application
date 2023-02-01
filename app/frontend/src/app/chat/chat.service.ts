import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public $message: BehaviorSubject<string> = new BehaviorSubject('');

  socket = io('http://localhost:3333');

  constructor() { }

  public sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      this.$message.next(message);
    });

    return this.$message.asObservable();
  }
}