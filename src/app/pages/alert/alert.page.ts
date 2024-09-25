import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  public alertButtons = ['OK']; // Defina a propriedade alertButtons

  public alertInputs = [
    {
      name: 'name',
      placeholder: 'Name',
    },
    {
      name: 'nickname',
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      name: 'age',
      type: 'number' as 'number', // Cast para o tipo correto
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      name: 'about',
      type: 'textarea' as 'textarea', // Cast para o tipo correto
      placeholder: 'A little about yourself',
    },
  ];

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: this.alertInputs, // Utilize a propriedade alertInputs aqui
      buttons: this.alertButtons, // Utilize alertButtons aqui também
    });

    await alert.present();
  }

}