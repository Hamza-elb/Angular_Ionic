import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular/providers/nav-controller';
import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Formations : any[];

  constructor(public router : Router) {

    this.Formations = [

      {nom : 'Angular'  , prix : 2000, detail : 'lorem ipsum'},
      {nom : 'Ionic'  ,   prix : 2500,  detail : 'lorem ipsum'},
      {nom : 'Laravel', prix : 3500, detail : 'lorem ipsum' },
      {nom : 'Php',     prix : 2000,  detail : 'lorem ipsum'}
    
    ];

  }
 //this.router.navigateByUrl('/DetailsPage',data);
  showData(data: any) : void {
      this.router.navigateByUrl('/DetailsPage',data);
    console.log('Data is ',data);
  }

  
}
