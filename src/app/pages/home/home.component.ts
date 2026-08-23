import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SearchService } from '../../core/services/search.service';
import { Product } from '../../core/models/Product';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {


  dealsOfWeek: Product[] = [];
  carouselProducts: Product[] = [];
  carouselProductsLoop: Product[] = [];


  latestProducts: Product[] = [];
  comingProducts: Product[] = [];

  selectedVideo: SafeResourceUrl | null = null;
  selectedPreviewImage: string | null = null;



  topBrands = [
    {
      name: 'Dewalt',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653674/dewalt-logo-png_zdkbie.png'
    },
    {
      name: 'Bosch',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653675/bosch_logo_nxyuvy.jpg'
    },
    {
      name: 'Red Wing',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653696/red-wing-logo_vi6qz0.png'
    },
    {
      name: 'Maxmech',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653695/maxmech_logo.jpg2_ii5gnk.jpg'
    },
    {
      name: 'Karcher',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653675/karcher_logo_mx5nh8.png'
    },
    {
      name: 'Makita',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653675/makita_logo_rmtl7y.png'
    },
    {
      name: 'Ingco',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653675/inggco_logo_uigxor.jpg'
    },
    {
      name: 'Safety Jogger',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653700/safety_jogger_logo_t5zdlu.jpg'
    },
    {
      name: 'Total',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653708/total_logo_l6bimy.png'
    },
    {
      name: '3M',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653674/3mlogo_nmxw71.jpg'
    },
    {
      name: 'MSA Safety',
      image: 'https://res.cloudinary.com/taus5tit/image/upload/v1786653696/MSA_safety_logo_i96rhh.png'
    }
  ];


  
  previewImage(img: string, event: Event) {
    event.stopPropagation();
    this.selectedPreviewImage = img;
  }

  closePreview() {
    this.selectedPreviewImage = null;
  }


  constructor(
    private sanitizer: DomSanitizer,
    private searchService: SearchService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.dealsOfWeek = this.searchService.getDealsOfWeek();


    this.carouselProducts = [
      this.searchService.getProductById(1),
      this.searchService.getProductById(10),
      this.searchService.getProductById(20),
      this.searchService.getProductById(30),
      this.searchService.getProductById(40),
      this.searchService.getProductById(2167),
      this.searchService.getProductById(50),
      this.searchService.getProductById(60),
      this.searchService.getProductById(70),
      this.searchService.getProductById(80),
      this.searchService.getProductById(90),
      this.searchService.getProductById(100),
      this.searchService.getProductById(110),
      this.searchService.getProductById(80),
      this.searchService.getProductById(2007),
      this.searchService.getProductById(2120),
      this.searchService.getProductById(90),
      this.searchService.getProductById(100),
      this.searchService.getProductById(7018),
      this.searchService.getProductById(65),
     this.searchService.getProductById(2170),
      this.searchService.getProductById(88),
      this.searchService.getProductById(25),
      this.searchService.getProductById(9026)
    ].filter(Boolean) as Product[];

    this.carouselProductsLoop = [
      ...this.carouselProducts,
      ...this.carouselProducts
    ];


    this.latestProducts = [
      this.searchService.getProductById(1),
      this.searchService.getProductById(2),
      this.searchService.getProductById(3),
      this.searchService.getProductById(4),
      this.searchService.getProductById(5),
      this.searchService.getProductById(6),
      this.searchService.getProductById(7),
      this.searchService.getProductById(8)
    ].filter(Boolean) as Product[];


    this.comingProducts = [
      this.searchService.getProductById(9),
      this.searchService.getProductById(10),
      this.searchService.getProductById(11),
      this.searchService.getProductById(12),
      this.searchService.getProductById(13),
      this.searchService.getProductById(14),
      this.searchService.getProductById(15),
      this.searchService.getProductById(16)
    ].filter(Boolean) as Product[];
    setTimeout(() => {

      if (window.innerWidth <= 576) {
        return;
      }

      const slider = $('.active-exclusive-product-slider');

      if (slider.hasClass('owl-loaded')) {
        slider.trigger('destroy.owl.carousel');
        slider.removeClass('owl-loaded');
        slider.find('.owl-stage-outer').children().unwrap();
      }

      slider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        smartSpeed: 900
      });

    }, 900);

    this.startCounters();
    this.initializeClock();


    setTimeout(() => {
      $('.video-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 700,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,

        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 4
          }
        }
      });
    }, 800);
    
  }

  initializeClock() {


    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    
    const deadline =
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const clock = document.getElementById('clockdiv');
    if (!clock) return;

    const daysSpan = clock.querySelector('.days') as HTMLElement;
    const hoursSpan = clock.querySelector('.hours') as HTMLElement;
    const minutesSpan = clock.querySelector('.minutes') as HTMLElement;
    const secondsSpan = clock.querySelector('.seconds') as HTMLElement;

    setInterval(() => {
      const t = deadline.getTime() - new Date().getTime();

      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const seconds = Math.floor((t / 1000) % 60);

      daysSpan.innerHTML = String(days);
      hoursSpan.innerHTML = ('0' + hours).slice(-2);
      minutesSpan.innerHTML = ('0' + minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + seconds).slice(-2);
    }, 1000);
  }

  

  videoFeeds = [
    {
      category: 'PRODUCT SHOWCASE',
      title: 'Astonic Mart Product Showcase',
      description:
        'Explore our industrial tools and machinery built for performance and reliability.',
      action: 'Watch Demonstration',
      link: 'https://youtube.com/shorts/x5cmWLqHI-Q?feature=share'
    },

    {
      category: 'DELIVERY',
      title: 'Reliable Delivery & Fulfillment',
      description:
        'See how Astonic Mart handles packaging, dispatch, and customer delivery professionally.',
      action: 'View Delivery Process',
      link: 'https://youtube.com/shorts/x5cmWLqHI-Q?feature=share'
    },

    {
      category: 'SAFETY EQUIPMENT',
      title: 'Industrial Safety Solutions',
      description:
        'Watch our protective gear and workplace safety equipment in action.',
      action: 'Watch Safety Demo',
      link: 'PASTE_VIDEO_LINK_HERE'
    },

    // {
    //   category: 'MACHINERY',
    //   title: 'Heavy Equipment Demonstration',
    //   description:
    //     'Professional demonstrations of machinery, cleaning systems, and industrial equipment.',
    //   action: 'See Equipment',
    //   link: 'PASTE_VIDEO_LINK_HERE'
    // },

    {
      category: 'CUSTOMER ORDERS',
      title: 'Order Processing & Dispatch',
      description:
        'From purchase to packaging and shipping — see how Astonic Mart delivers excellence.',
      action: 'View Process',
      link: 'PASTE_VIDEO_LINK_HERE'
    },

    // {
    //   category: 'GLOBAL SHIPPING',
    //   title: 'International Delivery Network',
    //   description:
    //     'Watch how Astonic Mart serves customers across Nigeria and beyond.',
    //   action: 'See Network',
    //   link: 'PASTE_VIDEO_LINK_HERE'
    // }
  ];



  getThumbnail(link: string) {
    const shortsMatch = link.match(/shorts\/([^?]+)/);
    const watchMatch = link.match(/[?&]v=([^&]+)/);

    const videoId = shortsMatch?.[1] || watchMatch?.[1];

    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  openVideo(link: string) {
    const shortsMatch = link.match(/shorts\/([^?]+)/);
    const watchMatch = link.match(/[?&]v=([^&]+)/);

    const videoId = shortsMatch?.[1] || watchMatch?.[1];

    this.selectedVideo =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1`
      );
  }

  closeVideo() {
    this.selectedVideo = null;
  }

  getVideoLink(link: string) {
    const shortsMatch = link.match(/shorts\/([^?]+)/);
    const watchMatch = link.match(/[?&]v=([^&]+)/);

    const videoId = shortsMatch?.[1] || watchMatch?.[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    );
  }



  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  startCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter: any) => {

      const target = +counter.getAttribute('data-target');

      let count = 0;

      const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {

          count += increment;

          counter.innerText = Math.ceil(count);

          setTimeout(updateCounter, 20);

        } else {

          counter.innerText = target;

        }
      };

      updateCounter();
    });
  }
}