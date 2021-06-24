import { Component, Input, OnInit } from '@angular/core';
import { AppLocation } from 'src/utilities/models';

@Component({
  selector: 'app-big-list-element',
  templateUrl: './big-list-element.component.html',
  styleUrls: ['./big-list-element.component.scss'],
})
export class BigListElementComponent implements OnInit {
  @Input()
  location: AppLocation;

  constructor() {}

  ngOnInit(): void {}
}
