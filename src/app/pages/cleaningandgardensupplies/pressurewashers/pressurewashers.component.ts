import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-pressurewashers',
  templateUrl: './pressurewashers.component.html',
  styleUrl: './pressurewashers.component.css'
})
export class PressurewashersComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Pressure Washers in Nigeria',
      'Shop quality pressure washers at Astonic Mart. Browse electric, cordless and industrial pressure washers available across Nigeria.',
      '/pressure-washers'
    );
  }
}