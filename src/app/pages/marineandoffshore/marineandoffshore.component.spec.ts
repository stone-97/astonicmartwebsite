import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineandoffshoreComponent } from './marineandoffshore.component';

describe('MarineandoffshoreComponent', () => {
  let component: MarineandoffshoreComponent;
  let fixture: ComponentFixture<MarineandoffshoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarineandoffshoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarineandoffshoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
