import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolpressureswashersComponent } from './petrolpressureswashers.component';

describe('PetrolpressureswashersComponent', () => {
  let component: PetrolpressureswashersComponent;
  let fixture: ComponentFixture<PetrolpressureswashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetrolpressureswashersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetrolpressureswashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
