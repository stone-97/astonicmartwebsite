import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../core/models/Product';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CloudinaryService } from '../../../cloudinary.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: Product | undefined;
  similarProducts: Product[] = [];
  dealsOfWeek: Product[] = [];
  categories: any[] = [];
  breadcrumb: any[] = [];
  categoryMap: any = {};

  isPaused: boolean = false;
  quantity: number = 1;

  selectedImage: string = '';
  currentIndex = 0;

  selectedColor: string = '';
  selectedSize: string | number = '';
  selectedPrice: number = 0;

  showShare: boolean = false;
  showCartBar = false;
  currentUrl: string = '';
  whatsappLink: string = '';
  facebookLink: string = '';
  twitterLink: string = '';

  showGroupOptions = false;
  groupOptions: { name: string; type: string }[] = [];

  showSubOptions = false;
  subOptions: { name: string; link: string | null }[] = [];

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private cartService: CartService,
    private router: Router,
    private sanitizer: DomSanitizer,
    public cloudinaryService: CloudinaryService
  ) { }

  ngOnInit(): void {

    this.categories = this.searchService.getCategories();

    this.dealsOfWeek = this.searchService.getDealsOfWeek();

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      if (isNaN(id)) {
        return;
      }
 


      this.product = this.searchService.getProductById(id);

      if (!this.product) {
        return;
      }

      this.generateBreadcrumb(this.product);

      if (this.product.showSimilar === true) {
        this.similarProducts = this.searchService.getSimilarProducts(
          this.product.category,
          this.product.id
        );
      }

      this.currentUrl = window.location.href;

      this.whatsappLink =
        `https://wa.me/?text=Check out this product: ${this.product.name} - ₦${this.product.price} ${this.currentUrl}`;

      this.facebookLink =
        `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`;

      this.twitterLink =
        `https://twitter.com/intent/tweet?url=${this.currentUrl}`;

    });

  }

  // =========================
  // IMAGE CONTROL
  // =========================
  changeImage(img: string, images: string[]) {
    this.selectedImage = img;
    this.currentIndex = images.indexOf(img);
  }

  nextImage(images: string[]) {
    this.currentIndex = (this.currentIndex + 1) % images.length;
    this.selectedImage = images[this.currentIndex];
  }

  prevImage(images: string[]) {
    this.currentIndex =
      (this.currentIndex - 1 + images.length) % images.length;
    this.selectedImage = images[this.currentIndex];
  }

  // =========================
  // SELECTION
  // =========================
  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string | number | undefined) {
    if (!size) return;

    this.selectedSize = size;

    const found = this.product?.variations?.find(
      v => v.size === size
    );

    if (found) {
      this.selectedPrice = found.price;
    }
  }




  // =========================
  // BREADCRUMB
  // =========================
  generateBreadcrumb(product: Product) {
    const groupMap: Record<string, string> = {
      'power-tools': 'Power Tools',
      'ppe': 'Safety & PPE',
      'safety ppe': 'Safety & PPE'
    };

    const groupName =
      groupMap[product.group || ''] ||
      this.formatCategory(product.group || '');

    this.breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Shop', link: '/shopcategories' },
      {
        name: groupName,
        type: 'group',
        group: product.group
      },
      {
        name: product.name,
        active: true
      }
    ];

    this.showGroupOptions = false;
    this.showSubOptions = false;

    console.log('breadcrumb =>', this.breadcrumb);
  }






  handleBreadcrumbClick(item: any) {
    if (!item) return;

    // normal links
    if (item.link) {
      this.router.navigate([item.link]);
      return;
    }

    // group click (Safety & PPE / Power Tools)
    if (item.type === 'group' && this.product?.group) {
      const groupLink =
        '/' + this.product.group.toLowerCase().replace(/\s+/g, '');

      this.router.navigate([groupLink]);
      return;
    }

    // By Category click
    if (item.type === 'category' && this.product?.category) {
      const categoryLink = this.findCategoryLink(this.product.category);

      if (categoryLink) {
        this.router.navigate([categoryLink]);
      }
    }
  }



  openGroupMenu(group: string) {
    this.showGroupOptions = true;
    this.showSubOptions = false;
    this.subOptions = [];

    if (group === 'power-tools') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'ppe' || group === 'safety ppe') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'sealants and adhesives') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    // ✅ your real group name
    if (group === 'fire and traffic safety') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    // ✅ new one
    if (group === 'Workshop And Garage') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }


    if (group === 'Electrical Equipments') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'Measuring And Testing') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'hand tools and accessories') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }
    if (group === 'construction equipments') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'pumping machines') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    if (group === 'cleaning and garden supplies') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }



    if (group === 'farm equipments') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }



    if (group === 'marine Offshore') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }



    if (group === ' lubricants chemical and protective sprayers') {
      this.groupOptions = [
        { name: 'By Category', type: 'category' }
      ];
      return;
    }

    this.groupOptions = [];
  }



  openOption(option: any) {
    // toggle close
    if (this.showSubOptions) {
      this.showSubOptions = false;
      this.subOptions = [];
      return;
    }

    if (!this.product) return;

    this.showSubOptions = true;
    this.subOptions = [];

    const items: any[] = [];

    // parent
    if (this.product.parentCategory) {
      items.push({
        name: this.formatCategory(this.product.parentCategory),
        link: this.findCategoryLink(this.product.parentCategory) || null
      });
    }

    // child
    if ((this.product as any).childCategory) {
      const child = (this.product as any).childCategory;

      items.push({
        name: this.formatCategory(child),
        link: this.findCategoryLink(child) || null
      });
    }

    // category
    if (this.product.category) {
      items.push({
        name: this.formatCategory(this.product.category),
        link:
          this.findCategoryLink(this.product.category) ||
          '/' + this.product.category.toLowerCase().replace(/-/g, '')
      });
    }

    this.subOptions = items;
  }



  formatCategory(category: string): string {
    return category
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  findCategoryLink(category: string): string | null {
    const normalized = this.formatCategory(category)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    const collectArrays = (obj: any): any[] => {
      let result: any[] = [];

      Object.values(obj).forEach(value => {
        if (Array.isArray(value)) {
          result.push(...value);
        } else if (
          value &&
          typeof value === 'object' &&
          !Array.isArray(value)
        ) {
          Object.values(value).forEach(v => {
            if (Array.isArray(v)) {
              result.push(...v);
            }
          });
        }
      });

      return result;
    };

    const allLists = collectArrays(this.categories);

    const found = allLists.find(item =>
      item?.name &&
      item?.link &&
      item.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized
    );

    return found ? found.link : null;
  }


  // =========================
  // CART
  // =========================
  addToCart() {
    if (!this.product) return;

    const item = {
      id: this.product.id,
      name: this.product.name,
      price: this.selectedPrice || this.product.price,
      quantity: this.quantity,
      image: this.product.images?.[0] || '',
      images: this.product.images || []
    };

    this.cartService.addToCart(item);

    // ✅ SHOW TOP BAR
    this.showCartBar = true;

    // ⏱ AUTO HIDE AFTER 5 SECONDS
    setTimeout(() => {
      this.showCartBar = false;
    }, 5000);
  }
  goToCart() {
    this.router.navigate(['/shoppingcart']);
  }

  hideCartBar() {
    this.showCartBar = false;
  }



  showCartPopup() {
    const popup = document.getElementById('cartPopup');
    if (!popup) return;

    popup.classList.add('show');

    // Auto hide after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }




  buyNow() {
    if (!this.product) return;

    const item = {
      id: this.product.id,
      name: this.product.name,
      price: this.selectedPrice || this.product.price,
      quantity: this.quantity,

      image: this.product.images?.[0] || '',
      images: this.product.images || []
    };

    this.cartService.clearCart();
    this.cartService.addToCart(item);

    this.router.navigate(['/productcheckout']);
  }

  // =========================
  // 💬 GET QUOTE (NEW FEATURE)
  // =========================
  getQuote(product: any) {
    this.router.navigate(['/get-a-quote'], {
      state: {
        product: {
          ...product,
          price: this.selectedPrice || product.price,
          quantity: this.quantity
        }
      }
    });
  }

  toggleShare() {
    this.showShare = !this.showShare;
  }

  copyLink() {
    navigator.clipboard.writeText(this.currentUrl);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Link copied',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {

    let videoId = '';

    // youtu.be/xxxx
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    // watch?v=xxxx
    else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }

    // shorts/xxxx
    else if (url.includes('/shorts/')) {
      videoId = url.split('/shorts/')[1].split('?')[0];
    }

    // embed/xxxx
    else if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1].split('?')[0];
    }

    // fallback
    else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }


  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}