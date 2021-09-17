import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Message } from '../../../../../data/interfaces/message/message.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss']
})
export class ContactFormPage implements OnInit {
  public contactForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.contactForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      message: ['', Validators.required],
    })
  }

  public sendMessage(message: Message): void {
    if (this.contactForm.valid) {
      console.log(message);
    }
  }

  public async close(): Promise<void> {
    await this.modalController.dismiss();
  }

}
