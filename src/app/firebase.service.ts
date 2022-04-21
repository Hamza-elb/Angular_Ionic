import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'formation';
  
   userId : string;
  constructor( private firestore : AngularFirestore,
   
   
    
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

}
