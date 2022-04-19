import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  FormationDetails : any;

  constructor(public navPar: NavParams) { 

    this.FormationDetails = this.navPar.get('data');
  }

  ngOnInit() {
  }

}
