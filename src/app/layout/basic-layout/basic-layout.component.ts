import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.less']
})
export class BasicLayoutComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  sidebarWidth: any = 256;
  tabWidth: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
