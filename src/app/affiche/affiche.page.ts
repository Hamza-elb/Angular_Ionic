import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.page.html',
  styleUrls: ['./affiche.page.scss'],
})
export class AffichePage implements OnInit {

  userLogged : 'hamza@gmail.com';
  course : any;
  email : string;
  total: any;

  constructor(
     private firebaseService : FirebaseService,
     private store : AngularFirestore,
  ) {

    
      
    
     
  this.firebaseService.getAuth().subscribe((auth) => {

        console.log(auth.email)


        this.firebaseService.grtFormationDunUser()
        
        
        .subscribe((res:any)=> {

          this.total = res.map(e => {

             console.log(res.data);

            return{
                  course : e.payload.doc.data()['course'],
                  prix : e.payload.doc.data()['prix'],
                  duree : e.payload.doc.data()['duree'],
                  description : e.payload.doc.data()['description'],
                  email : e.payload.doc.data()['email'],
              }
         
          })
        
         
          
        })
      

    });
        
      
      
    
  

   }


  async ngOnInit() {


    
    

  }

}
