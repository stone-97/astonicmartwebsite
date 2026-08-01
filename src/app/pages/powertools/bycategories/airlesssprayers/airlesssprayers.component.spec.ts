import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlesssprayersComponent } from './airlesssprayers.component';

describe('AirlesssprayersComponent', () => {
  let component: AirlesssprayersComponent;
  let fixture: ComponentFixture<AirlesssprayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirlesssprayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirlesssprayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
