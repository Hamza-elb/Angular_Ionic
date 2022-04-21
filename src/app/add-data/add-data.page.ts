import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';



@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})


export class AddDataPage implements OnInit {
 user = {} as User;
  
  Title : string;
  prix : string;
  duree : string;
  description : string;
  id : any;
  owner : any;

  constructor(private route : ActivatedRoute,
    private firebaseService : FirebaseService,
    private ngFireAuth : AngularFireAuth,
    private router : Router, 
    ) { 

      
      this.owner =  this.ngFireAuth.currentUser.then((user)=>{
        console.log(user.uid);
      })
      
   
  }

  ngOnInit() {
  }

  addFormations(){
    let data = {
      Title : this.Title,
      prix : this.prix,
      duree : this.duree,
      description : this.description,
      owner : this.owner,
    }
    this.firebaseService.add_formations(data).then((res : any)=>{
      console.log(res);
      this.router.navigateByUrl('/home')
    })
  }

}
