import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-lawnmowers',
  templateUrl: './lawnmowers.component.html',
  styleUrl: './lawnmowers.component.css'
})
export class LawnmowersComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Lawn Mowers in Nigeria',
      'Shop quality lawn mowers at Astonic Mart. Browse reliable lawn mowers and garden equipment available across Nigeria.',
      '/lawn-mowers'
    );
  }
}