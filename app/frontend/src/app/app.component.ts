import { Component } from '@angular/core';

import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newMessage: string = '';
  public messageList: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getNewMessage().subscribe({
      next: (message: string) => {
        this.messageList.push(message);
      }
    });
  }

  public sendMessage(): void {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}