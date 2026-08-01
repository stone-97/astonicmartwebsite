import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingmachinesComponent } from './weldingmachines.component';

describe('WeldingmachinesComponent', () => {
  let component: WeldingmachinesComponent;
  let fixture: ComponentFixture<WeldingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeldingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeldingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
