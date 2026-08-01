import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingprotectionwearsComponent } from './weldingprotectionwears.component';

describe('WeldingprotectionwearsComponent', () => {
  let component: WeldingprotectionwearsComponent;
  let fixture: ComponentFixture<WeldingprotectionwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeldingprotectionwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeldingprotectionwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
