import { Component } from '@angular/core';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  messages: any[] = [];

  constructor(private contactService: ContactService){}

  ngOnInit(){
    this.contactService.getMessages().subscribe((res:any) => {

      // Firebase returns object → convert to array
      this.messages = Object.keys(res || {}).map(key => ({
        id: key,
        ...res[key]
      }));

    });
  }

}
