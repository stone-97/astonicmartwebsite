import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterytestersComponent } from './batterytesters.component';

describe('BatterytestersComponent', () => {
  let component: BatterytestersComponent;
  let fixture: ComponentFixture<BatterytestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatterytestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatterytestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
