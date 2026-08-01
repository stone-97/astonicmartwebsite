import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigweldingmachinesComponent } from './migweldingmachines.component';

describe('MigweldingmachinesComponent', () => {
  let component: MigweldingmachinesComponent;
  let fixture: ComponentFixture<MigweldingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MigweldingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MigweldingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
