import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'formation';

  UserColliction = 'mycourses';
  
   userId : string;
  constructor( private firestore : AngularFirestore,
    private ngFireAuth :AngularFireAuth,
   
   
    
    ) { }

  get_Formations(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  add_formations(data){
    return this.firestore.collection(this.collectionName).add(data);
  }

  get_Formation(id){

return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }


  get_single_Formation(id){

    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }

 getAuth() {
    return this.ngFireAuth.authState.pipe(map((auth) => auth));
  }

  grtFormationDunUser(){
      
      return this.firestore.collection(this.UserColliction).snapshotChanges();
  }

}
