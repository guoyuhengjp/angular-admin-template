import {Component, Input, OnInit} from '@angular/core';
import {PlatformCoreService} from '../../../core/services/platform-core.service';
import {Router} from '@angular/router';
import {MenuItem} from '../../../core/constants/menuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean;
  isShow: boolean;
  menuResource: Array<MenuItem> = [];

  constructor(
    private platformCoreService: PlatformCoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuResource = this.platformCoreService.getMenuResource();
  }

  isSelected(module: string): boolean {
    return module === this.router.url;
  }

  isOpen(menuItems: MenuItem[]): boolean {
    const u = this.router.url;
    const forceMenu = menuItems.find(menuItem => menuItem.module === u);
    return forceMenu != null;
  }
}
