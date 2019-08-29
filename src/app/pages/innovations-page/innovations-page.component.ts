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
  projectID:number = 1585;
  innovationStages:any;
  innovationTypes:any;
  orgTypes:any;
  geographicScopes:any;
  regions:any;
  countries:any;
  institutions:any;
  cgiarEntities:any;

  innovation:any ={
    "title": "",
    "narrative": "",
    "projectId": this.projectID,
    "stageOfInnovation": {},
    "descriptionStage": "",
    "nextUserOrganizationTypes": [],
    "innovationType": {},
    "otherInnovationType": "",
    "geographicScopes": [],
    "regions": [],
    "countries": [],
    "equitativeEffort": true,
    "leadOrganization": {},
    "contributingInstitutions": [],
    "evidenceLink": "string",
    "contributingCGIAREntities": [],
    "phase": { "name": "AR", "year": this.year }
  };



  constructor(
    private _clarisaService: ClarisaServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      this.params = params;
      console.log(params);

      //this.innovation.title = params.entityAcronym;
    });
  }

  ngOnInit() {

    // Load Innovation
    if(this.params.id){
      this._clarisaService.getInnovationByID(this.params.entityAcronym, this.params.id, "AR", this.year).subscribe((data:any) => {
        this.innovation = data.result;
      });
    }

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
    this._clarisaService.postInnovation(this.params.entityAcronym, this.innovation).subscribe((data:any) => {
      console.log(data);
    });
  }

}
