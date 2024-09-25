import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {


  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    console.log('ActionSheetPage inicializado');
  } 

  teste() {
    console.log('testMethod chamado');
  }
  

  async presentActionSheet() {
    console.log('presentActionSheet chamado');
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'yellow',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
  
    await actionSheet.present();
  }
  
}
