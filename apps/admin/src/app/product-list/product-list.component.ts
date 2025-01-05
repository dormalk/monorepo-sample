
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList,MatListItem } from '@angular/material/list';
@Component({
  imports: [
    CommonModule,
    MatIcon,
    MatList,
    MatListItem
  ],
  selector: 'monorepo-angular-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true
})
export class ProductListComponent implements OnInit {

  folders: any[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}