import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('myCarousel') myCarousel!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    setTimeout(() => {

      if (typeof $ === 'undefined') {
        console.error('jQuery is not available.');
        return;
      }

      const element = this.myCarousel.nativeElement;

      $(element).carousel({
        interval: 2000,
        pause: 'hover',
        wrap: true
      });

      $(element).carousel('cycle');

    }, 100);

  }
}