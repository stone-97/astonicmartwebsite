import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-hose',
  templateUrl: './hose.component.html',
  styleUrl: './hose.component.css'
})
export class HoseComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Hoses in Nigeria',
      'Shop quality hoses at Astonic Mart. Browse water hoses, pressure hoses, hydraulic hoses and hose accessories available across Nigeria.',
      '/hose'
    );
  }
}