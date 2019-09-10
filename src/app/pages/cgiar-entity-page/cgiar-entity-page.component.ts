import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ClarisaServiceService } from '../../services/clarisa-service.service';
import { FirebasePublicationsService } from '../../services/firebase-publications.service';


@Component({
  selector: 'app-cgiar-entity-page',
  templateUrl: './cgiar-entity-page.component.html',
  styleUrls: ['./cgiar-entity-page.component.css']
})
export class CgiarEntityPageComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;

  params:any;
  innovationID:number;
  publicationsData:string = '';
  publications: any[];

  constructor(
    private _clarisaService: ClarisaServiceService,
    private _publicationsService: FirebasePublicationsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      this.params = params;
    });

  }

  ngOnInit() {
    // this._publicationsService.getPublications().subscribe((data:any) => {
    //   console.log(data);
    // });
  }

  editInnovation(){
    if(this.innovationID){
      this.router.navigate([this.params.entityAcronym ,'innovation', this.innovationID]);
    }
  }

  removeInnovation(){
    if(this.innovationID){
      this._clarisaService.deleteInnovation(this.params.entityAcronym, this.innovationID, "AR", 2018 ).subscribe((data:any) => {
        console.log(data);
      });
    }
  }


  loadPublicationsData(){
    let publicationsArray = JSON.parse(this.publicationsData);
    if (Array.isArray(publicationsArray)){
      this.publications = publicationsArray;
    }
  }

  uploadPublications(){
    this.publications.forEach( (publication, index, array) => {
      if(!publication.id){
        this._clarisaService.createPublication(this.params.entityAcronym, publication).subscribe((data:any) => {
          if (!isNaN(data.result)){
            array[index].id = data.result;
          }else{
            console.log(data.result);
          }
        });
      }
    });
  }

}
