import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./view/navbar/navbar.component";
import { DashboardComponent } from "./view/dashboard/dashboard.component";
import { SidebarComponent } from "./view/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, DashboardComponent, SidebarComponent]
})
export class AppComponent {
  title = 'EventManagement';
}
