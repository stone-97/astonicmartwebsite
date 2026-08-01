import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadbarriersComponent } from './roadbarriers.component';

describe('RoadbarriersComponent', () => {
  let component: RoadbarriersComponent;
  let fixture: ComponentFixture<RoadbarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadbarriersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadbarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
