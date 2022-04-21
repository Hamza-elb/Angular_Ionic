import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {

  Title : string;
  prix : string;
  duree : string;
  description : string;
  id : any;

  constructor(private route : ActivatedRoute,
    private firebaseService : FirebaseService,
    private router : Router) { 

    this.route.params.subscribe((data : any) => {
      //this.id = data.Title;
      console.log(data.type);

      /*this.firebaseService.get_single_Formation(data.Title).subscribe((data : any) => {
        console.log(data);
        this.Title = data.Title;
        this.prix = data.prix;
        this.duree = data.duree;
        this.description = data.description;
      })*/
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
    }
    this.firebaseService.add_formations(data).then((res : any)=>{
      console.log(res);
      this.router.navigateByUrl('/home')
    })
  }

}
