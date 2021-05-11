import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import {PlatformCoreService} from '../../../core/services/platform-core.service';
import {AppReuseStrategy} from '../../../core/app-reuse-strategy';
import {TabItem} from '../../../core/constants/tabItem';

@Component({
  selector: 'app-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.less']
})
export class ReuseTabComponent {

  /**
   * Selected中のTab
   */
  currentIndex = -1;

  /**
   * mouseoverのTab
   */
  currentOverIndex = -1;

  /**
   * tabのWidth
   */
  tabRealWidth: any;

  /**
   * SidebarのWidth
   */
  sidebarWidth: 256;

  /**
   * headerのWidth
   */
  headerWidth: 270;

  /**
   * SidebarCollapsedのWidth
   */
  sidebarCollapsedWidth: 68;

  /**
   * menuDropDownWidth
   */
  menuDropDownWidth: 38;

  /**
   * tabItemWidth
   */
  tabItemWidth: 96;
  /**
   * tabSizeが変化された外部に通知
   */
  @Output() changeTabSize: EventEmitter<number> = new EventEmitter();

  /**
   * Cache中のTabItem
   */
  tabItemList: Array<TabItem> = [];

  /**
   * 表示中のtabItem
   */
  tabItemShowList: Array<TabItem> = [];

  /**
   * CollapsedList
   */
  tabItemCollapsedList: Array<TabItem> = [];

  isCollapsedTab: boolean;
  constructor(
    private hst: ElementRef,
    private platformCoreService: PlatformCoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    // HomePage を設定
    const homePage: TabItem = this.platformCoreService.getHomePage();
    this.tabItemList.push(homePage);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(routeData => {
        const url = this.router.url;
        this.titleService.setTitle(routeData.title);
        const exitMenu = this.tabItemList.find(p => p.module === url);
        if (!exitMenu) {
          this.tabItemList.push({ title: routeData.title, module: url, power: '', isSelect: true });
          this.tabResize(this.sidebarWidth);
        }
        this.tabItemList.forEach(p => p.isSelect = p.module === url);
        this.currentIndex = this.tabItemList.findIndex(p => p.module === url);
      });
  }

  /**
   * tabItemのサイズをリセット
   * @param sw　SideBarのWidth
   */
  tabResize(sw?: any): void {
    const winWidth = document.body.offsetWidth;
    this.sidebarWidth = sw !== undefined ? sw : 256;
    const tabMaxWidth = winWidth - this.sidebarWidth - this.sidebarCollapsedWidth - this.headerWidth - 2;
    this.tabRealWidth = tabMaxWidth - this.menuDropDownWidth;
    this.changeTabSize.emit(tabMaxWidth);
    const tabMaxNum = Math.floor(this.tabRealWidth / this.tabItemWidth);
    let tabNum = this.tabItemList.length > tabMaxNum ? tabMaxNum : this.tabItemList.length;
    if (tabNum < 0) {
      tabNum = 0;
    }
    // clear
    this.tabItemShowList = this.tabItemList.slice(0, tabNum);
    this.tabItemCollapsedList = this.tabItemList.slice(tabNum);
    this.isCollapsedTab = this.tabItemList.length > tabNum;
  }

  /**
   * tabを閉じる
   * @param module　module名称
   * @param isSelect 選択中かどうか
   * @param event　event
   */
  closeTab(module: string, isSelect: boolean, event: Event): void {
    event.preventDefault();
    const index = this.tabItemList.findIndex(p => p.module === module);
    if (this.tabItemList.length === 1) { return; }
    delete AppReuseStrategy.deleteRouteSnapshot[module];
    if (!isSelect) { return; }
    let menu = this.tabItemList[index + 1];
    if (!menu) {
      menu = this.tabItemList[index - 1];
    }
    this.tabItemList.forEach(p => p.isSelect = p.module === menu.module);
    this.tabItemList = this.tabItemList.filter(p => p.module !== module);
    this.router.navigate(['/' + menu.module]);
    this.tabResize(this.sidebarWidth);
  }

  tabItemShowSelect(ev: any, index: number): void {
    this.currentIndex = index;
    const menu = this.tabItemShowList[this.currentIndex];
    this.router.navigate([menu.module]);
  }

  tabItemCollapsedSelect(ev: any, index: number): void {
    this.currentIndex = index;
    const menu = this.tabItemCollapsedList[this.currentIndex];
    this.router.navigate([menu.module]);
  }

  showClose(tabItem: string, i: number): void {
    if (i === 0 && tabItem === '__tabItemShow') { return; }
    this.currentOverIndex = i;
    document.getElementById(tabItem + i).style.display = 'inline-block';
  }
  /**
   * HideClose
   */
  hideClose(tabItem: string, i: number): void {
    this.currentOverIndex = i;
    document.getElementById(tabItem + i).style.display = 'none';
  }
}
