import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-powertools',
  templateUrl: './powertools.component.html',
  styleUrl: './powertools.component.css'
})
export class PowertoolsComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Power Tools in Nigeria',
      'Shop quality power tools at Astonic Mart. Browse drills, grinders, saws and other professional power tools available across Nigeria.',
      '/power-tools'
    );
  }
}