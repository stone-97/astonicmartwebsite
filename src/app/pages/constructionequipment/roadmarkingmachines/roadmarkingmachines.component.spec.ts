import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmarkingmachinesComponent } from './roadmarkingmachines.component';

describe('RoadmarkingmachinesComponent', () => {
  let component: RoadmarkingmachinesComponent;
  let fixture: ComponentFixture<RoadmarkingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmarkingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadmarkingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
