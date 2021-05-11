import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ReuseTabComponent } from './reuse-tab/reuse-tab.component';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.less']
})
export class BasicLayoutComponent implements OnInit, AfterViewInit {

  isCollapsed = false;
  sidebarWidth: any = 256;
  tabWidth: any = 0;

  @ViewChild('trigger', { static: true }) customTrigger: TemplateRef<void>;
  @ViewChild('reuseTab', { static: true }) reuseTab: ReuseTabComponent;

  constructor(private hst: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const that = this;
    fromEvent(window, 'resize')
      .subscribe((event: any) => {
        that.smartDetection();
        that.doLayout();
      });
    setTimeout(() => {
      that.smartDetection();
      that.doLayout();
    }, 500);
  }

  collapsedTrigger(): void {
    this.isCollapsed = !this.isCollapsed;
    this.doLayout();
    const e = document.createEvent('Event');
    e.initEvent('resize', true, true);
    window.dispatchEvent(e);
  }

  tabSize(n: number): void {
    this.tabWidth = n;
  }

  doLayout(): void {
    this.reuseTab.tabResize(this.sidebarWidth);
  }

  private smartDetection(): void {
    if (window.innerWidth < 500) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = 'none';
      this.isCollapsed = true;
    } else if (window.innerWidth < 1000) {
      this.hst.nativeElement.querySelector('nz-sider').style.display = '';
      this.isCollapsed = true;
    }
  }
}
