import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalcalipersComponent } from './digitalcalipers.component';

describe('DigitalcalipersComponent', () => {
  let component: DigitalcalipersComponent;
  let fixture: ComponentFixture<DigitalcalipersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalcalipersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalcalipersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
