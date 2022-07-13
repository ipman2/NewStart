import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        if (window.confirm(`Do you really want to clear all?`)) {
            this.messages = [];
        }
    }

    clearBatch(count: number) {
        if (window.confirm(`Do you really want to clear the top ${count} messages?`)) {
            this.messages = this.messages.slice(count);
        }
    }
}
