import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirblowgunsComponent } from './airblowguns.component';

describe('AirblowgunsComponent', () => {
  let component: AirblowgunsComponent;
  let fixture: ComponentFixture<AirblowgunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirblowgunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirblowgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
