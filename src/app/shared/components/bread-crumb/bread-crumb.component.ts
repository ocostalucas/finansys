import { Component, OnInit, Input } from '@angular/core';


interface BreadCrumbItem{
  text: string,
  link?: string,
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() items: Array<BreadCrumbItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public isTheLastItem(item: BreadCrumbItem ): boolean{
    return this.items.indexOf(item) + 1 == this.items.length;
  }

}
