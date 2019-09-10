import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebasePublicationsService {

  constructor(
    private firestore: AngularFirestore
  ) {

  }

  public getPublications(){
    return this.firestore.collection('publications').valueChanges();
  }

  public createPublication(publication: any){
    return this.firestore.collection('publications').add(publication);
  }
}
