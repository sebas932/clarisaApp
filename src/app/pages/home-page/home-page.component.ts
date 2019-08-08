import { Component, OnInit } from '@angular/core';

import { ClarisaServiceService } from '../../services/clarisa-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cgiarEntities:any = [];

  constructor(
    private _clarisaService: ClarisaServiceService,
  ) {

  }

  ngOnInit() {

    this._clarisaService.getCgiarEntities().subscribe((data: {}) => {
      this.cgiarEntities = data;
    });

  }

}
