import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticdrillsComponent } from './magneticdrills.component';

describe('MagneticdrillsComponent', () => {
  let component: MagneticdrillsComponent;
  let fixture: ComponentFixture<MagneticdrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagneticdrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagneticdrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
