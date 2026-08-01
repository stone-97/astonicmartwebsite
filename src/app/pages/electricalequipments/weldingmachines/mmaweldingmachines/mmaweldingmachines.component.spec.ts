import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaweldingmachinesComponent } from './mmaweldingmachines.component';

describe('MmaweldingmachinesComponent', () => {
  let component: MmaweldingmachinesComponent;
  let fixture: ComponentFixture<MmaweldingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MmaweldingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmaweldingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
