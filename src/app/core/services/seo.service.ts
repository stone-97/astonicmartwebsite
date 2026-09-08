import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SearchService } from './search.service';
import { CATEGORY_SEO_MAP } from '../data/category-seo.data';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly siteName = 'Astonic Mart';
  private readonly siteUrl = 'https://astonicmart.com';
  private readonly defaultImage =
    'https://astonicmart.com/assets/img/astonic%20slide%20white%20(1).png';

  constructor(
    private title: Title,
    private meta: Meta,
    private searchService: SearchService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  updateSeo(
    title: string,
    description: string,
    url: string = '/',
    image: string = this.defaultImage
  ): void {

    const fullTitle = title.includes(this.siteName)
      ? title
      : `${title} | ${this.siteName}`;

    const canonicalUrl = `${this.siteUrl}${url}`;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({
      name: 'description',
      content: description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: fullTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description
    });

    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: this.siteName
    });

    this.meta.updateTag({
      property: 'og:image',
      content: image
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: fullTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: description
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: image
    });

    this.updateCanonical(canonicalUrl);
  }

  updateCategorySeo(
    categoryName: string,
    url: string,
    description?: string
  ): void {

    const title = `${categoryName} in Nigeria`;

    const seoDescription = description ||
      `Shop quality ${categoryName.toLowerCase()} at Astonic Mart. Browse trusted products for professionals, businesses and industrial applications across Nigeria.`;

    this.updateSeo(
      title,
      seoDescription,
      url
    );
  }

  updateBrandSeo(
    brandName: string,
    url: string,
    description?: string
  ): void {

    const title = `${brandName} Products in Nigeria`;

    const seoDescription = description ||
      `Shop ${brandName} products at Astonic Mart. Browse quality tools, safety equipment and industrial products available in Nigeria.`;

    this.updateSeo(
      title,
      seoDescription,
      url
    );
  }

  private updateCanonical(url: string): void {

    let canonical =
      this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }

  private formatRouteName(path: string): string {
    return path
      .replace(/[-_]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, letter => letter.toUpperCase())
      .trim();
  }

  private getSeoNameFromRoute(path: string): string {
    const mappedName = CATEGORY_SEO_MAP[`/${path}`];

    if (mappedName) {
      return mappedName;
    }

    const normalize = (value: string): string =>
      value.toLowerCase().replace(/[^a-z0-9]/g, '');

    const routeKey = normalize(path);
    const products = this.searchService.getProducts();

    const match = products.find(product =>
      normalize(product.category || '') === routeKey ||
      normalize(product.childCategory || '') === routeKey ||
      normalize(product.parentCategory || '') === routeKey
    );

    if (match?.category && normalize(match.category) === routeKey) {
      return match.category;
    }

    if (match?.childCategory && normalize(match.childCategory) === routeKey) {
      return match.childCategory;
    }

    if (match?.parentCategory && normalize(match.parentCategory) === routeKey) {
      return match.parentCategory;
    }

    return this.formatRouteName(path);
  }
  updateSeoFromRoute(url: string): void {

    const path = url
      .split('?')[0]
      .split('#')[0]
      .replace(/^\/|\/$/g, '');

    const noIndexRoutes = [
      'dash',
      'search-results',
      'productcheckout',
      'searchbar',
      'login',
      'whishlist',
      'compare',
      'confirmation',
      'shoppingcart'
    ];

    // Private / utility pages: do not allow search engines to index them
    if (noIndexRoutes.includes(path)) {
      this.meta.updateTag({
        name: 'robots',
        content: 'noindex, follow'
      });

      return;
    }

    const excludedRoutes = [
      '',
      'index',
      'pages',
      'faq',
      'termsandconditions',
      'privacypolicy',
      'deliverypolicy',
      'warrantyandreturns',
      'contact',
      'get-a-quote',
      'blog',
      'pagesinfo',
      'blogdetails',
      'aboutus',
      'pagination',
      'bulkorders'
    ];

    if (!path || excludedRoutes.includes(path)) {
      return;
    }

    if (path.startsWith('product/')) {
      return;
    }

    const name = this.getSeoNameFromRoute(path);

    const brands = [
      'bosch',
      'ingco',
      'makita',
      'total',
      'dickies',
      'portwest',
      'redwings',
      'supersteel',
      'safetyjogger',
      'threem',
      'msa',
      'uvex',
      'beta'
    ];

    if (brands.includes(path.toLowerCase())) {
      this.updateBrandSeo(
        name,
        `/${path}`
      );
      return;
    }

    this.updateCategorySeo(
      name,
      `/${path}`
    );
  }
}