import { Component, OnInit } from '@angular/core';

import { ClarisaServiceService } from '../../services/clarisa-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-innovations-page',
  templateUrl: './innovations-page.component.html',
  styleUrls: ['./innovations-page.component.css']
})
export class InnovationsPageComponent implements OnInit {

  params:any;
  year:number = 2018;
  innovationStages:any;
  innovationTypes:any;
  orgTypes:any;
  geographicScopes:any;
  regions:any;
  countries:any;
  institutions:any;
  cgiarEntities:any;

  innovation = {
    "title": "",
    "narrative": "",
    "projectId": 1585,
    "stageOfInnovation": -1,
    "descriptionStage": "",
    "nextUserOrganizationTypes": [],
    "innovationType": -1,
    "otherInnovationType": "",
    "geographicScopes": [],
    "regions": [],
    "countries": [],
    "equitativeEffort": true,
    "leadOrganization": -1,
    "contributingInstitutions": [],
    "evidenceLink": "",
    "contributingCGIAREntities": []
  };

  constructor(
    private _clarisaService: ClarisaServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      this.params = params;

      //this.innovation.title = params.entityAcronym;
    });
  }

  ngOnInit() {

    this._clarisaService.getInnovationStages().subscribe((data:any) => {
      this.innovationStages = data.result;
    });

    this._clarisaService.getOrgTypes().subscribe((data:any) => {
      this.orgTypes = data.result;
    });

    this._clarisaService.getInnovationTypes().subscribe((data:any) => {
      this.innovationTypes = data.result;
    });

    this._clarisaService.getGeoScopes().subscribe((data:any) => {
      this.geographicScopes = data.result;
    });

    this._clarisaService.getRegions().subscribe((data:any) => {
      this.regions = data.result;
    });

    this._clarisaService.getCountries().subscribe((data:any) => {
      this.countries = data.result;
    });

    this._clarisaService.getInstitutions().subscribe((data:any) => {
      this.institutions = data.result;
    });

    this._clarisaService.getCgiarEntities().subscribe((data:any) => {
      this.cgiarEntities = data.result;
    });


  }

  save(){
    this._clarisaService.postInnovation(this.params.entityAcronym, this.innovation, this.year).subscribe((data:any) => {
      console.log(data);
    });

  }

}
