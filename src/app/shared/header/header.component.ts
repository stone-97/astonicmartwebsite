import {
  Component,
  HostListener,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnDestroy
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import {
  Router,
  NavigationEnd
} from '@angular/router';

import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  currencyOpen = false;
  accountOpen = false;

  // =========================================================
  // MOBILE SHOP BY CATEGORY
  // =========================================================

  mobileCategoriesOpen = false;

  mobileSafetyOpen = false;

  mobileSafetyByCategoryOpen = false;

  mobileClothingOpen = false;

  mobileSecurityOpen = false;

  mobileHeadProtectionOpen = false;

  mobileEyeProtectionOpen = false;

  mobileRespiratoryOpen = false;

  mobileLifeSavingOpen = false;

  mobileSafetyByBrandsOpen = false;

  // =========================================================
  // MOBILE POWER HAND TOOLS
  // =========================================================

  mobilePowerHandToolsOpen = false;

  mobilePowerByCategoryOpen = false;

  mobilePowerGrindersOpen = false;

  mobilePowerDrillsOpen = false;

  mobilePowerSawsOpen = false;

  mobilePowerPressureWashersOpen = false;

  mobilePowerImpactWrenchesOpen = false;

  mobilePowerJackHammersOpen = false;

  mobilePowerBlowersOpen = false;
  mobilePowerRotaryHammerDrillsOpen = false;

  mobilePowerAngleGrindersOpen = false;

  mobilePowerPressureWasherCategoryOpen = false;

  mobilePowerPressureWasherBrandsOpen = false;

  mobilePowerBlowerCategoriesOpen = false;

  mobilePowerBlowerBrandsOpen = false;

  mobilePowerByBrandsOpen = false;


  // =========================================================
  // MOBILE MEASURING & TESTING
  // =========================================================

  mobileMeasuringTestingOpen = false;

  mobileFuelTestingOpen = false;

  mobileGeneralMeasuringOpen = false;

  mobileCalipersOpen = false;

  mobileMicrometersOpen = false;

  mobileWaterTestersOpen = false;

  mobileLevelingToolsOpen = false;

  mobileMeasuringScalesOpen = false;

  mobileAnalogueScalesOpen = false;

  mobileDigitalScalesOpen = false;

  // =========================================================
// MOBILE ELECTRICAL EQUIPMENT
// =========================================================

mobileElectricalEquipmentOpen = false;

mobileElectricalCategoriesOpen = false;

  mobileGeneratorsOpen = false;

  mobileWeldingOpen = false;


  // =========================================================
  // MOBILE CONSTRUCTION EQUIPMENT
  // =========================================================

  mobileConstructionEquipmentOpen = false;

  mobileConstructionCategoriesOpen = false;



  // =========================================================
  // MOBILE HAND TOOLS & ACCESSORIES
  // =========================================================

  mobileHandToolsOpen = false;

  mobileHandToolCategoriesOpen = false;

  mobileHandToolAccessoriesOpen = false;

  mobileHandToolsBrandsOpen = false;


  // =========================================================
  // MOBILE PUMPING MACHINES
  // =========================================================

  mobilePumpingMachinesOpen = false;

  mobilePumpingCategoriesOpen = false;


  // =========================================================
  // MOBILE CLEANING & GARDEN SUPPLIES
  // =========================================================

  mobileCleaningGardenOpen = false;

  mobileCleaningGardenMainOpen = false;

  mobileCleaningPressureWashersOpen = false;
  mobileCleaningPressureWasherCategoriesOpen = false;
  mobileCleaningPressureWasherBrandsOpen = false;

  mobileCleaningBlowersOpen = false;
  mobileCleaningBlowerCategoriesOpen = false;
  mobileCleaningBlowerBrandsOpen = false;

  mobileCleaningHoseOpen = false;

  mobileCleaningVacuumCleanersOpen = false;
  mobileCleaningVacuumCategoriesOpen = false;
  mobileCleaningVacuumBrandsOpen = false;

  mobileCleaningLawnMowersOpen = false;
  mobileCleaningLawnMowerCategoriesOpen = false;
  mobileCleaningLawnMowerBrandsOpen = false;

  mobileCleaningBrushCuttersOpen = false;
  mobileCleaningBrushCutterCategoriesOpen = false;
  mobileCleaningBrushCutterBrandsOpen = false;


  // =========================================================
  // MOBILE FARM EQUIPMENTS
  // =========================================================

  mobileFarmEquipmentsOpen = false;

  mobileFarmCategoriesOpen = false;


  // =========================================================
  // MOBILE SAFETY & TRAFFIC
  // =========================================================

  mobileSafetyTrafficOpen = false;

  mobileSafetyTrafficCategoriesOpen = false;

  mobileFireSafetyOpen = false;


  mobileWorkshopGarageOpen = false;

  mobileLiftingHandlingOpen = false;

  mobileWheelServiceOpen = false;

  mobileLaddersOpen = false;

  // =========================================================
  // ROUTER SUBSCRIPTION
  // =========================================================




  

  private routerSubscription?: Subscription;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {

    /*
     * Whenever Angular finishes navigating to another page,
     * reset all mobile menus.
     */
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        this.resetMobileMenus();

      });

  }


  // =========================================================
  // DOCUMENT CLICK
  // =========================================================

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {

    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown')) {

      this.currencyOpen = false;

      this.accountOpen = false;

    }

  }


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.closeMegaMenuOnClick();

    }

  }


  // =========================================================
  // EXISTING MEGA MENU
  // =========================================================

  private closeMegaMenuOnClick(): void {

    // your existing mega-menu code

  }


  // =========================================================
  // RESET ALL MOBILE MENUS
  // =========================================================

  private resetMobileMenus(): void {

    this.mobileCategoriesOpen = false;

    this.mobileSafetyOpen = false;

    this.mobileSafetyByCategoryOpen = false;

    this.mobileClothingOpen = false;

    this.mobileSecurityOpen = false;

    this.mobileHeadProtectionOpen = false;

    this.mobileEyeProtectionOpen = false;

    this.mobileRespiratoryOpen = false;

    this.mobileLifeSavingOpen = false;

    this.mobileSafetyByBrandsOpen = false;

    this.mobilePowerHandToolsOpen = false;

    this.mobilePowerByCategoryOpen = false;

    this.mobilePowerGrindersOpen = false;

    this.mobilePowerDrillsOpen = false;

    this.mobilePowerSawsOpen = false;

    this.mobilePowerPressureWashersOpen = false;

    this.mobilePowerImpactWrenchesOpen = false;

    this.mobilePowerJackHammersOpen = false;

    this.mobilePowerBlowersOpen = false;


    this.mobilePowerRotaryHammerDrillsOpen = false;

    this.mobilePowerAngleGrindersOpen = false;

    this.mobilePowerPressureWasherCategoryOpen = false;

    this.mobilePowerPressureWasherBrandsOpen = false;

    this.mobilePowerBlowerCategoriesOpen = false;

    this.mobilePowerBlowerBrandsOpen = false;

    this.mobilePowerByBrandsOpen = false;




    this.mobileMeasuringTestingOpen = false;

    this.mobileFuelTestingOpen = false;

    this.mobileGeneralMeasuringOpen = false;

    this.mobileCalipersOpen = false;

    this.mobileMicrometersOpen = false;

    this.mobileWaterTestersOpen = false;

    this.mobileLevelingToolsOpen = false;

    this.mobileMeasuringScalesOpen = false;

    this.mobileAnalogueScalesOpen = false;

    this.mobileDigitalScalesOpen = false;



    this.mobileHandToolsOpen = false;

    this.mobileHandToolCategoriesOpen = false;

    this.mobileHandToolAccessoriesOpen = false;

    this.mobileHandToolsBrandsOpen = false;


    this.mobileElectricalEquipmentOpen = false;

    this.mobileElectricalCategoriesOpen = false;


    this.mobileConstructionEquipmentOpen = false;

    this.mobileConstructionCategoriesOpen = false;


    this.mobilePumpingMachinesOpen = false;

    this.mobilePumpingCategoriesOpen = false;


    this.mobileCleaningGardenOpen = false;

    this.mobileCleaningGardenMainOpen = false;

    this.mobileCleaningPressureWashersOpen = false;
    this.mobileCleaningPressureWasherCategoriesOpen = false;
    this.mobileCleaningPressureWasherBrandsOpen = false;

    this.mobileCleaningBlowersOpen = false;
    this.mobileCleaningBlowerCategoriesOpen = false;
    this.mobileCleaningBlowerBrandsOpen = false;

    this.mobileCleaningHoseOpen = false;

    this.mobileCleaningVacuumCleanersOpen = false;
    this.mobileCleaningVacuumCategoriesOpen = false;
    this.mobileCleaningVacuumBrandsOpen = false;

    this.mobileCleaningLawnMowersOpen = false;
    this.mobileCleaningLawnMowerCategoriesOpen = false;
    this.mobileCleaningLawnMowerBrandsOpen = false;

    this.mobileCleaningBrushCuttersOpen = false;
    this.mobileCleaningBrushCutterCategoriesOpen = false;
    this.mobileCleaningBrushCutterBrandsOpen = false;

    this.mobileFarmEquipmentsOpen = false;

    this.mobileFarmCategoriesOpen = false;


    this.mobileSafetyTrafficOpen = false;

    this.mobileSafetyTrafficCategoriesOpen = false;

    this.mobileFireSafetyOpen = false;



    this.mobileElectricalEquipmentOpen = false;

    this.mobileElectricalCategoriesOpen = false;

    this.mobileGeneratorsOpen = false;

    this.mobileWeldingOpen = false;

    this.mobileWorkshopGarageOpen = false;
    this.mobileLiftingHandlingOpen = false;
    this.mobileWheelServiceOpen = false;
    this.mobileLaddersOpen = false;
    // Also close the main Bootstrap navbar
    this.closeMobileMenu();

  }


  // =========================================================
  // CLOSE MAIN MOBILE NAVBAR
  // =========================================================

  closeMobileMenu(): void {

    if (!isPlatformBrowser(this.platformId)) {

      return;

    }


    const navbar = document.getElementById('navbarNav');


    if (navbar && navbar.classList.contains('show')) {

      navbar.classList.remove('show');

    }


    const toggler = document.querySelector('.navbar-toggler');


    if (toggler) {

      toggler.classList.add('collapsed');

      toggler.setAttribute('aria-expanded', 'false');

    }

  }


  // =========================================================
  // CLEAN UP ROUTER SUBSCRIPTION
  // =========================================================

  ngOnDestroy(): void {

    this.routerSubscription?.unsubscribe();

  }

}