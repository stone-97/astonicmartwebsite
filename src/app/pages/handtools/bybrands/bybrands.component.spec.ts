import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BybrandsComponent } from './bybrands.component';

describe('BybrandsComponent', () => {
  let component: BybrandsComponent;
  let fixture: ComponentFixture<BybrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BybrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BybrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
