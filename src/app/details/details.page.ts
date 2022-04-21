import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
   Title : string;
  prix : string;
  duree : string;
  description : string;
  id : any;

  constructor( private route : ActivatedRoute,
    private firebaseService : FirebaseService,
    private router : Router
    ) { 

    this.route.params.subscribe((data : any) => {
      this.id = data.type;
      console.log(data.type);

      this.firebaseService.get_single_Formation(data.type).subscribe((data : any) => {
        console.log(data);
        this.Title = data.Title;
        this.prix = data.prix;
        this.duree = data.duree;
        this.description = data.description;
      })
    })
  }

  ngOnInit() {
  }

}
