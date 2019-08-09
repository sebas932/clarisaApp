import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cgiar-entity-page',
  templateUrl: './cgiar-entity-page.component.html',
  styleUrls: ['./cgiar-entity-page.component.css']
})
export class CgiarEntityPageComponent implements OnInit {

  params:any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      this.params = params;

      //this.innovation.title = params.entityAcronym;
    });
  }

  ngOnInit() {
  }

}
