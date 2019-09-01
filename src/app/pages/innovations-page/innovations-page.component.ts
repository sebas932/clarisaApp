import { Component, OnInit } from '@angular/core';

import { ClarisaServiceService } from '../../services/clarisa-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Innovation } from 'src/app/interfaces/innovation';

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

  loadedData:boolean = false;

  innovation:Innovation;

  constructor(
    private _clarisaService: ClarisaServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      this.params = params;
    });

    // Prepare Data

    this.prepareData();
  }

  ngOnInit() {

  }

  loadInnovation(){
    if(this.params.id){
      this._clarisaService.getInnovationByID(this.params.entityAcronym, this.params.id, "AR", this.year).subscribe((data:any) => {
        this.innovation = data.result;
        console.log(data.result);
        this.innovation.projectId = { id: this.projectID },
        this.innovation.phase = { name: "AR", year: this.year };
        this.loadedData= true;
      });
    }else{
      this.innovation = {
        title: null,
        narrative: null,
        projectId: { id: this.projectID },
        stageOfInnovation: { code: null },
        descriptionStage: null,
        nextUserOrganizationTypes: [],
        innovationType: { code: null },
        otherInnovationType: null,
        geographicScopes: [],
        regions: [],
        countries: [],
        equitativeEffort: true,
        leadOrganization: { code: null },
        contributingInstitutions: [],
        evidenceLink: null,
        contributingCGIAREntities: [],
        phase: { name: "AR", year: this.year }
      };
      this.loadedData= true;
    }

  }

  compareFn(object1: any, object2: any) {
    return object1 && object2 ? object1.code === object2.code : object1 === object2;
  }

  prepareData() : void {
    forkJoin(
        this._clarisaService.getInnovationStages(),
        this._clarisaService.getOrgTypes(),
        this._clarisaService.getInnovationTypes(),
        this._clarisaService.getGeoScopes(),
        this._clarisaService.getRegions(),
        this._clarisaService.getCountries(),
        this._clarisaService.getInstitutions(),
        this._clarisaService.getCgiarEntities()
    ).subscribe((data => {
      this.innovationStages = data[0].result;
      this.orgTypes = data[1].result;
      this.innovationTypes = data[2].result;
      this.geographicScopes = data[3].result;
      this.regions = data[4].result;
      this.countries = data[5].result;
      this.institutions = data[6].result;
      this.cgiarEntities = data[7].result;
      // Load Innovation
      this.loadInnovation();
    }));
  }

  submit(){
    if(this.innovation.id){
      this.update();
    }else{
      this.save();
    }
  }

  save(){
    this._clarisaService.createInnovation(this.params.entityAcronym, this.innovation).subscribe((data:any) => {
      console.log(data);
    });
  }

  update(){
    this._clarisaService.updateInnovation(this.params.entityAcronym, this.innovation).subscribe((data:any) => {
      console.log(data);
    });
  }

}
