import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserdistancemetersComponent } from './laserdistancemeters.component';

describe('LaserdistancemetersComponent', () => {
  let component: LaserdistancemetersComponent;
  let fixture: ComponentFixture<LaserdistancemetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaserdistancemetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaserdistancemetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
