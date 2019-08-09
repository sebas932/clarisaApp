import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CLARISA Testing App';
  params:any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      console.log(this.activatedRoute.firstChild);
      this.params = params;
      console.log('parent',this.params);

    });
  }

}
