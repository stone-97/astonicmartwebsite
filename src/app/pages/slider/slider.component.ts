import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('myCarousel') myCarousel!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.myCarousel.nativeElement;

    const existing = bootstrap.Carousel.getInstance(element);
    if (existing) {
      existing.dispose();
    }

    const carousel = new bootstrap.Carousel(element, {
      interval: 2000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    carousel.cycle();
  }
}
