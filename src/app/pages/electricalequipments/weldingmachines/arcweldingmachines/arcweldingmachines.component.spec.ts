import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcweldingmachinesComponent } from './arcweldingmachines.component';

describe('ArcweldingmachinesComponent', () => {
  let component: ArcweldingmachinesComponent;
  let fixture: ComponentFixture<ArcweldingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcweldingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArcweldingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
