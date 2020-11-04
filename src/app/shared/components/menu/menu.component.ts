import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
head: string[] = [  'assets/menu/logo.png' ];
  constructor() { }

  ngOnInit(): void {
  }

}
