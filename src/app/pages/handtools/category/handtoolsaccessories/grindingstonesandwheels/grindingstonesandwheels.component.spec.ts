import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingstonesandwheelsComponent } from './grindingstonesandwheels.component';

describe('GrindingstonesandwheelsComponent', () => {
  let component: GrindingstonesandwheelsComponent;
  let fixture: ComponentFixture<GrindingstonesandwheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrindingstonesandwheelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrindingstonesandwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
