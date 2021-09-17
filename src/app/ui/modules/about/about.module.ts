import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { ContactFormPage } from './components/contact-form/contact-form.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AboutRoutingModule,
  ],
  declarations: [AboutPage, ContactFormPage]
})
export class AboutModule {}
