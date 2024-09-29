import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu/menu.page';



@NgModule({
  declarations: [HeaderComponent, MenuPage],  // Declare o componente aqui
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, MenuPage]
})
export class ComponentsModule { }
