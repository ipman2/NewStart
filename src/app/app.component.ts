import {Component} from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    private linksEndpoint = `/assets/data/dashboard-link.json`;

    constructor(public messageService: MessageService) {}

    links!: {[link: string]: string};

    async ngOnInit(): Promise<void> {
       try {
           this.links = await fetch(this.linksEndpoint, {
               headers: {'Content-Type': 'application/json'}
           }).then(res => res.json()).then(data => data);
       } catch (err) {
           console.log(err);
       }
    }
}
