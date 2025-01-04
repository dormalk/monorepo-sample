import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@monorepo-angular/core/navbar';

@Component({
  imports: [
    RouterModule,
    RouterOutlet,
    NavbarComponent
  ],
  selector: 'monorepo-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
