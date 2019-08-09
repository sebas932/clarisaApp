import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//const endpoint = 'https://clarisa.cgiar.org/api';
// Proxy http://localhost/issuesRoadmap/public/api/proxy/?url=
const endpoint = 'http://localhost/issuesRoadmap/public/api/proxy/?url=http://marlodev.ciat.cgiar.org/api';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic bWFybG9zYWRtaW46NjcyMzY0Ng=='
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClarisaServiceService {

  constructor(private http: HttpClient) {
    console.log('CLARISA Service ...');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private getQuery(query:string){
    let endQuery = endpoint+'/'+ query;
    return this.http.get(endQuery, httpOptions);
  }

  postInnovation(cgiarEntity:String, innovation:any, year:number): Observable<any> {
    let endQuery = endpoint + '/'+ cgiarEntity +'/innovations?year='+ year;
    return this.http.post(endQuery, innovation, httpOptions).pipe(
      map(this.extractData));
  }

  getInnovationByID(): Observable<any> {
    return this.getQuery('CCAFS/innovations/44?phase=AR&year=2018').pipe(
      map(this.extractData));
  }

  getCgiarEntities(): Observable<any> {
    return this.getQuery('cgiar-entities?typeId=1').pipe(
      map(this.extractData));
  }

  getInnovationStages(): Observable<any> {
    return this.getQuery('stage-of-innovations').pipe(
      map(this.extractData));
  }

  getInnovationTypes(): Observable<any> {
    return this.getQuery('innovation-types').pipe(
      map(this.extractData));
  }

  getOrgTypes(): Observable<any> {
    return this.getQuery('organization-types').pipe(
      map(this.extractData));
  }

  getGeoScopes(): Observable<any> {
    return this.getQuery('geographic-scopes').pipe(
      map(this.extractData));
  }

  getRegions(): Observable<any> {
    return this.getQuery('un-regions').pipe(
      map(this.extractData));
  }

  getCountries(): Observable<any> {
    return this.getQuery('countries').pipe(
      map(this.extractData));
  }

  getInstitutions(): Observable<any> {
    return this.getQuery('institutions').pipe(
      map(this.extractData));
  }

}
