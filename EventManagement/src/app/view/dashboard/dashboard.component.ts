import { Component } from '@angular/core';
import { EventCardComponent } from "./event-card/event-card.component";

@Component({
    selector: 'dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [EventCardComponent]
})
export class DashboardComponent {

}
