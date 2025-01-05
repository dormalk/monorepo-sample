import { Component, Input, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  imports: [
    MatToolbarModule
  ],
  selector: 'monorepo-angular-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent implements OnInit {

  @Input() appName = 'Admin';

  constructor() { }

  ngOnInit(): void {
  }

}
