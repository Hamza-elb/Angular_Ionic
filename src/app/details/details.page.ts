import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    public alertController: AlertController,
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

  
  
  async presentAlert(id) {

  

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

            console.log('Confirm Cancel');
          }

        }, {
          text: 'Ok',
          handler: (res) => {
            this.router.navigateByUrl('/save/'+id)
            console.log('Confirm Ok',res);
          }
        }] 
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
