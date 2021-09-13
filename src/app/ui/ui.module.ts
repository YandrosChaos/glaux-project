import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UIPage } from './ui.page';
import { UIRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UIRoutingModule
  ],
  declarations: [UIPage]
})
export class UIModule {}
