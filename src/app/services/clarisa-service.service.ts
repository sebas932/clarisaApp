import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//const endpoint = 'https://clarisa.cgiar.org/api';
const endpoint = 'https://sebas932-eval-test.apigee.net/clarisa/api';


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
    //let endQuery = '/api/'+ query;
    let endQuery = endpoint+'/'+ query;
    return this.http.get(endQuery, httpOptions);
  }

  getCgiarEntities(): Observable<any> {
    return this.getQuery('cgiar-entities').pipe(
      map(this.extractData));
  }
}
