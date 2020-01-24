import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  @Input() hasVisited: Boolean;
  @Input() title: string;
  isHidden: boolean = true;
  constructor() { }
  ngOnInit() {
  }
}
