import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenscalesComponent } from './kitchenscales.component';

describe('KitchenscalesComponent', () => {
  let component: KitchenscalesComponent;
  let fixture: ComponentFixture<KitchenscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitchenscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
