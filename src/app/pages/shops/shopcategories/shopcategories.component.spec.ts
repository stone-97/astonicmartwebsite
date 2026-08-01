import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcategoriesComponent } from './shopcategories.component';

describe('ShopcategoriesComponent', () => {
  let component: ShopcategoriesComponent;
  let fixture: ComponentFixture<ShopcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
