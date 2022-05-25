import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'src/app/core/models/comic.interface';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {
  @Input() comic: Comic;

  showingExpandMenu: boolean = false;
  timeOut: any;

  constructor() { }

  ngOnInit(): void {
  }

  clickEventShowExpandMenu() {
    this.showingExpandMenu = !this.showingExpandMenu;
  }

  mouseOutEventListener() {
    if(this.showingExpandMenu) {
      this.timeOut = setTimeout(() => {
        this.showingExpandMenu = !this.showingExpandMenu;
        console.log('rung');
      }, 1000);
    }
      
  }

  mouseOverEventListener() {
    clearTimeout(this.timeOut);
  }
}
