import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigweldingmachinesComponent } from './tigweldingmachines.component';

describe('TigweldingmachinesComponent', () => {
  let component: TigweldingmachinesComponent;
  let fixture: ComponentFixture<TigweldingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TigweldingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TigweldingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
