import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { WIDGET } from 'src/app/shared/modules/widget/widget.token';
import { Widget } from 'src/app/shared/modules/widget/widget.interface';

@Component({
  selector: 'app-section-wrapper-widget',
  templateUrl: './section-wrapper-widget.component.html',
  styleUrls: ['./section-wrapper-widget.component.scss']
})
export class SectionWrapperWidgetComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true})
  widget: Widget;
  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
    this.widget.getData();
  }

}
