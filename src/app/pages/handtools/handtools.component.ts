import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-handtools',
  templateUrl: './handtools.component.html',
  styleUrl: './handtools.component.css'
})
export class HandtoolsComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Hand Tools in Nigeria',
      'Shop quality hand tools at Astonic Mart. Browse professional hand tools and equipment available across Nigeria.',
      '/hand-tools'
    );
  }
}