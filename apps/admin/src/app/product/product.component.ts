import { Component, OnInit } from '@angular/core';
import {  MatCardContent,
          MatCardSubtitle,
          MatCardTitle,
          MatCard,
          MatCardHeader } from '@angular/material/card'
@Component({
  imports: [
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatCardHeader
  ],
  selector: 'monorepo-angular-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}