import { Component, HostListener,AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  currencyOpen = false;
  accountOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown')) {
      this.currencyOpen = false;
      this.accountOpen = false;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.closeMegaMenuOnClick();
    }
  }

  private closeMegaMenuOnClick(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const megaMenu = document.querySelector('.mega-dropdown');
    if (!megaMenu) return;

    megaMenu.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[routerLink], a[href]');

      // Only act if a real navigation link was clicked
      if (
        link &&
        link.getAttribute('href') !== '#' &&
        link.getAttribute('href') !== 'javascript:void(0)'
      ) {
        // Find the toggle button
        const toggleButton = document.getElementById('shopMegaDropdown');

        // Close the Bootstrap dropdown
        if (toggleButton) {
          toggleButton.classList.remove('show');
          toggleButton.setAttribute('aria-expanded', 'false');
        }

        // Hide the mega menu
        megaMenu.classList.remove('show');

        // Remove the "show" class from the parent dropdown
        const parentLi = toggleButton?.closest('.dropdown');
        if (parentLi) {
          parentLi.classList.remove('show');
        }
      }
    });
  }
}