import { Injectable } from '@angular/core';
import { MenuItem, Menus } from '../constants/menuItem';
import { TabItem, HomePage } from '../constants/tabItem';

@Injectable({
  providedIn: 'root'
})
export class PlatformCoreService {

  protected MenuResource: Array<MenuItem> = Menus;

  protected HomePage: TabItem = HomePage;

  constructor() { }

  getHomePage(): TabItem {
    return this.HomePage;
  }

  getMenuResource(): Array<MenuItem> {
    return this.MenuResource;
  }
}
