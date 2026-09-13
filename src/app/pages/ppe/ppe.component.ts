import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-ppe',
  templateUrl: './ppe.component.html',
  styleUrl: './ppe.component.css'
})
export class PPeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Personal Protective Equipment (PPE) in Nigeria',
      'Shop quality personal protective equipment (PPE) at Astonic Mart. Browse safety helmets, boots, gloves, goggles, vests and more across Nigeria.',
      '/ppe'
    );
  }
}