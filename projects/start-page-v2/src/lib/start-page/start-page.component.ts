import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'sb-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Input() public startPageData : any;
  constructor() { }

  ngOnInit() {
  }

}
