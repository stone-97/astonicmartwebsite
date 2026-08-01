import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmmachinesComponent } from './farmmachines.component';

describe('FarmmachinesComponent', () => {
  let component: FarmmachinesComponent;
  let fixture: ComponentFixture<FarmmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
