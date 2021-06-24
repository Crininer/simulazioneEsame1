import { Component, OnInit } from '@angular/core';
import { AppLocation } from 'src/utilities/models';

@Component({
  selector: 'app-big-list',
  templateUrl: './big-list.component.html',
  styleUrls: ['./big-list.component.scss'],
})
export class BigListComponent implements OnInit {
  locationsList: Array<AppLocation>;

  constructor() {
    this.locationsList = [
      {
        name: 'Pianasino',
        plants: [
          {
            name: 'Seggiovia 1',
            weather: 2,
            routes: [
              { name: 'S1.1', difficulty: 1, peopleInQueue: 283 },
              { name: 'S1.2', difficulty: 2, peopleInQueue: 23 },
            ],
          },
          {
            name: 'Seggiovia 2',
            weather: 3,
            routes: [{ name: 'S2', difficulty: 3, peopleInQueue: 6 }],
          },
          {
            name: 'Funivia 1',
            weather: 1,
            routes: [
              { name: 'F1.1', difficulty: 2, peopleInQueue: 61 },
              { name: 'F1.2', difficulty: 3, peopleInQueue: 13 },
            ],
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
