import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-brushcutters',
  templateUrl: './brushcutters.component.html',
  styleUrl: './brushcutters.component.css'
})
export class BrushcuttersComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo(
      'Brush Cutters in Nigeria',
      'Shop quality brush cutters at Astonic Mart. Browse reliable brush cutters and garden equipment available across Nigeria.',
      '/brush-cutters'
    );
  }
}