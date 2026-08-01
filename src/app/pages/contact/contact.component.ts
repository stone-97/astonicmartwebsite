import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 successMessage = '';

  constructor(private contactService: ContactService){}

  onSubmit(form: NgForm) {

    if(form.invalid){
      return;
    }

    this.contactService.sendMessage(form.value).subscribe(res => {

      this.successMessage = "Your message has been sent successfully!";
      form.resetForm();

    });
  }
}
