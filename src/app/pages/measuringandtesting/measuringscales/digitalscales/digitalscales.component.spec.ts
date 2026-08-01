import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalscalesComponent } from './digitalscales.component';

describe('DigitalscalesComponent', () => {
  let component: DigitalscalesComponent;
  let fixture: ComponentFixture<DigitalscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
