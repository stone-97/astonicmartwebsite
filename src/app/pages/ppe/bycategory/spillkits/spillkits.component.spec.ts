import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpillkitsComponent } from './spillkits.component';

describe('SpillkitsComponent', () => {
  let component: SpillkitsComponent;
  let fixture: ComponentFixture<SpillkitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpillkitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpillkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
