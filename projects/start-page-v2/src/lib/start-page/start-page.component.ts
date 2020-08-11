import { Component, OnInit, Input, EventEmitter, Output, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponentInput, startEventType } from './startPageEvent';
@Component({
  selector: 'sb-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {

  @Input() startPageData: StartPageComponentInput;
  @Output() startEvents: EventEmitter<startEventType> = new EventEmitter<startEventType>();
  constructor() { }

  ngOnInit(): void {
    this.startEvents.emit('START');
  }

  ngOnDestroy(): void {
    this.startEvents.emit('END');
  }
}
