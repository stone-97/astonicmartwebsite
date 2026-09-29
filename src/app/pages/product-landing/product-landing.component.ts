import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SearchService } from '../../core/services/search.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/Product';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrl: './product-landing.component.css'
})
export class ProductLandingComponent implements OnInit {

  product: Product | undefined;

  quantity = 1;
  selectedImage = '';
  selectedVariation: any = null;

  showWhatsAppForm = false;

  // Products selected for the WhatsApp order
  orderItems: {
    product: Product;
    quantity: number;
  }[] = [];

  whatsappForm = {
    fullName: '',
    email: '',
    phone: '',
    altPhone: '',
    state: '',
    city: '',
    address: '',

  };

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private cartService: CartService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    emailjs.init('F4cX3cLntLb5WG5ox');

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      if (!id) return;

      this.product = this.searchService.getProductById(id);

      if (this.product?.images?.length) {
        this.selectedImage = this.product.images[0];
      }

      if (this.product?.variations?.length) {
        this.selectedVariation = this.product.variations[0];
      }

      // Reset order for the new landing page product
      this.orderItems = [];

      if (this.product) {
        this.orderItems = [
          {
            product: this.product,
            quantity: this.quantity
          }
        ];
      }

      // Meta Pixel - ViewContent
      if (this.product && typeof window !== 'undefined') {

        const fbq = (window as any).fbq;

        if (fbq) {

          const price =
            this.product.discountPrice ||
            this.product.price;

          fbq('track', 'ViewContent', {
            content_ids: [String(this.product.id)],
            content_type: 'product',
            content_name: this.product.name,
            value: price,
            currency: 'NGN'
          });

        }

      }

    });

  }

  /* =========================================================
     IMAGE
  ========================================================= */

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  selectVariation(variation: any): void {
    this.selectedVariation = variation;
  }

  getCurrentPrice(): number {
    return this.selectedVariation?.price || this.product?.discountPrice || this.product?.price || 0;
  }

  /* =========================================================
     DESCRIPTION
  ========================================================= */

  getShortDescription(description: string): string {

    if (!description) return '';

    const plainText = description
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const sentences =
      plainText.match(/[^.!?]+[.!?]+/g);

    if (!sentences || sentences.length === 0) {

      return plainText.substring(0, 180).trim() + '...';

    }

    return sentences
      .slice(0, 2)
      .join(' ')
      .trim();

  }


  /* =========================================================
     FEATURES
  ========================================================= */

  getFeatureList(features: string): string[] {

    if (!features) return [];

    return features
      .replace(/<[^>]*>/g, '')
      .split(/\r?\n/)
      .map(feature => feature.trim())
      .filter(feature => feature.length > 0);

  }


  getBenefitFeatures(): string[] {

    if (!this.product?.features) return [];

    return this
      .getFeatureList(this.product.features)
      .slice(0, 3);

  }


  /* =========================================================
     SPECIFICATIONS
  ========================================================= */

  getSpecificationList(
    specification: string
  ): { label: string; value: string }[] {

    if (!specification) return [];

    return specification
      .replace(/<[^>]*>/g, '')
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => {

        const separatorIndex =
          line.indexOf(':');

        if (separatorIndex === -1) {

          return {
            label: '',
            value: line
          };

        }

        return {

          label:
            line
              .substring(0, separatorIndex)
              .trim(),

          value:
            line
              .substring(separatorIndex + 1)
              .trim()

        };

      });

  }

  getRelatedProduct(id: number): Product | undefined {
    return this.searchService.getProductById(id);
  }

  /* =========================================================
     BUY NOW
  ========================================================= */

  buyNow(): void {

    if (!this.product) return;

    const item = {

      id: this.product.id,

      name: this.product.name,

      price:
        this.product.discountPrice ||
        this.product.price,

      quantity: this.quantity,

      image:
        this.product.images?.[0] || '',

      images:
        this.product.images || []

    };

    this.cartService.clearCart();

    this.cartService.addToCart(item);

    this.router.navigate(['/productcheckout']);

  }


  /* =========================================================
     GET A QUOTE
  ========================================================= */

  getQuote(): void {

    if (!this.product) return;

    this.router.navigate(
      ['/get-a-quote'],
      {
        state: {
          product: this.product
        }
      }
    );

  }


  /* =========================================================
     WHATSAPP ORDER
  ========================================================= */

  orderOnWhatsApp(): void {

    if (!this.product) return;

    /*
     * Make sure the current product is in the order.
     */
    const existingItem =
      this.orderItems.find(
        item =>
          item.product.id === this.product!.id
      );

    if (!existingItem) {

      this.orderItems.push({

        product: this.product,

        quantity: this.quantity

      });

    }
    else {

      existingItem.quantity =
        this.quantity;

    }

  
      this.quantity;


  }




  /* =========================================================
     ADD RELATED PRODUCT TO ORDER
  ========================================================= */

  addToOrder(product: Product): void {

    const existingItem =
      this.orderItems.find(
        item => item.product.id === product.id
      );

    if (existingItem) {

      existingItem.quantity++;

    } else {

      this.orderItems.push({

        product: product,

        quantity: 1

      });

    }

    // Scroll to the order summary on mobile
    if (window.innerWidth <= 991) {
      setTimeout(() => {
        document
          .querySelector('.landing-order-summary')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
      }, 100);
    }

  }

  /* =========================================================
     REMOVE PRODUCT FROM ORDER
  ========================================================= */

  removeFromOrder(productId: number): void {

    /*
     * Do not allow the main product to be removed.
     */
    if (
      this.product &&
      productId === this.product.id
    ) {

      return;

    }

    this.orderItems =
      this.orderItems.filter(
        item =>
          item.product.id !== productId
      );

  }


  /* =========================================================
     CHANGE ORDER QUANTITY
  ========================================================= */

  updateOrderQuantity(
    productId: number,
    quantity: number
  ): void {

    const item =
      this.orderItems.find(
        orderItem =>
          orderItem.product.id === productId
      );

    if (!item) return;

    if (quantity < 1) {

      quantity = 1;

    }

    item.quantity = quantity;

  }


  /* =========================================================
     ORDER TOTAL
  ========================================================= */

  getOrderTotal(): number {

    return this.orderItems.reduce(
      (total, item) => {

        const price =
          item.product.discountPrice ||
          item.product.price;

        return total +
          (price * item.quantity);

      },
      0
    );

  }


  /* =========================================================
     WHATSAPP SUBMISSION
  ========================================================= */

  submitWhatsAppOrder(): void {

    if (
      !this.whatsappForm.fullName ||
      !this.whatsappForm.phone ||
      !this.whatsappForm.state ||
      !this.whatsappForm.city ||
      !this.whatsappForm.address
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.orderItems.length === 0) {
      alert('No product has been selected.');
      return;
    }

    const orderDetails = this.orderItems.map(item => {
      const price = item.product.discountPrice || item.product.price;
      const subtotal = price * item.quantity;

      return `
${item.product.name}
Quantity: ${item.quantity}
Price: ₦${price.toLocaleString()}
Subtotal: ₦${subtotal.toLocaleString()}
`;
    }).join('\n');

    const total = this.getOrderTotal();

    const emailParams = {
      order_id: 'AST-' + Math.floor(Math.random() * 100000),

      name: this.whatsappForm.fullName,

      phone: this.whatsappForm.phone,

      to_email: this.whatsappForm.email,

      email: this.whatsappForm.email,

      address:
        `${this.whatsappForm.address}, ${this.whatsappForm.city}, ${this.whatsappForm.state}, Nigeria`,

      items: orderDetails,

      total: total,

      status: 'WhatsApp Order',

      admin_payment_info:
        'Your order has been received successfully.',

      customer_payment_info:
        'Your order has been received successfully. Once your payment has been confirmed, we will begin processing your order.'
    };
   emailjs.send(
  'service_rxui4gr',
  'template_kuh2whe',
  emailParams
)
.then(() => {

  if (this.whatsappForm.email) {
    emailjs.send(
      'service_rxui4gr',
      'template_3ls7gg4',
      emailParams
    )
    .catch((error) => {
      console.error('Customer email error:', error);
    });
  }

  const whatsappMessage = `
NEW ORDER - ASTONIC MART

Customer Name: ${this.whatsappForm.fullName}
Phone: ${this.whatsappForm.phone}
Alternative Phone: ${this.whatsappForm.altPhone || 'Not provided'}
Email: ${this.whatsappForm.email || 'Not provided'}

Delivery Details:
State: ${this.whatsappForm.state}
City: ${this.whatsappForm.city}
Address: ${this.whatsappForm.address}

ORDER:
${orderDetails}

TOTAL: ₦${total.toLocaleString()}
`;

  const whatsappUrl =
    `https://wa.me/2349074375786?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');

})
.catch((error) => {

  console.error('EmailJS error:', error);

  alert(
    'We could not send your order. Please try again.'
  );

});

    
  }


  scrollToWhatsAppForm(): void {
    document.getElementById('whatsapp-order-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  /* =========================================================
     CLOSE WHATSAPP FORM
  ========================================================= */

  closeWhatsAppForm(): void {

    this.showWhatsAppForm = false;

  }


  /* =========================================================
     YOUTUBE VIDEO
  ========================================================= */

  getSafeVideoUrl(
    url: string
  ): SafeResourceUrl {

    let videoId = '';

    if (url.includes('youtu.be/')) {

      videoId =
        url
          .split('youtu.be/')[1]
          .split('?')[0];

    }

    else if (url.includes('watch?v=')) {

      videoId =
        url
          .split('watch?v=')[1]
          .split('&')[0];

    }

    else if (url.includes('/shorts/')) {

      videoId =
        url
          .split('/shorts/')[1]
          .split('?')[0];

    }

    else if (url.includes('/embed/')) {

      videoId =
        url
          .split('/embed/')[1]
          .split('?')[0];

    }

    else {

      return this
        .sanitizer
        .bypassSecurityTrustResourceUrl(url);

    }


    const embedUrl =
      `https://www.youtube.com/embed/${videoId}`;

    return this
      .sanitizer
      .bypassSecurityTrustResourceUrl(
        embedUrl
      );

  }

}