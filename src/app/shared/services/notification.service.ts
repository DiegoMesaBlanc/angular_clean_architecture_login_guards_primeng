import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})


export class NotificationService {
  // private messageSubject = new Subject<string>();
  // messagesAction$ = this.messageSubject.asObservable();


  constructor(
    private readonly messageService: MessageService,
  ) { }


  // setMessages(message: string, duration: number = 4000) {
  //   this.messageSubject.next({ message, duration });
  // }

  // clearAllMessages() {
  //   this.setMessages('');
  // }

  success(title: string, message: string, duration: number = 6000) {
    this.messageService.add({
      summary: title,
      detail: message,
      severity: 'success',
      life: duration
    });
  }

  info(title: string, message: string, duration: number = 6000) {
    this.messageService.add({
      summary: title,
      detail: message,
      severity: 'info',
      life: duration
    });
  }

  warn(title: string, message: string, duration: number = 6000) {
    this.messageService.add({
      summary: title,
      detail: message,
      severity: 'warn',
      life: duration
    });
  }

  error(title: string, message: string, duration: number = 6000) {
    this.messageService.add({
      summary: title,
      detail: message,
      severity: 'error',
      life: duration
    });
  }
}
