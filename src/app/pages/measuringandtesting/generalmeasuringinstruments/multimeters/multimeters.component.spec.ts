import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimetersComponent } from './multimeters.component';

describe('MultimetersComponent', () => {
  let component: MultimetersComponent;
  let fixture: ComponentFixture<MultimetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultimetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultimetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
