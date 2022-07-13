import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        if (window.confirm(`Do you really want to clear all?`)) { this.messages = []; }
    }
}
