import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    userLogged : string;

  constructor(  private firebaseService : FirebaseService) { 

     this.firebaseService.getAuth().subscribe((auth) => {

          this.userLogged = auth.email;

     })
  }

  ngOnInit() {
  }

}
