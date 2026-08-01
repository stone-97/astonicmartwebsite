import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppressComponent } from './shoppress.component';

describe('ShoppressComponent', () => {
  let component: ShoppressComponent;
  let fixture: ComponentFixture<ShoppressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
