import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagclosermachinesComponent } from './bagclosermachines.component';

describe('BagclosermachinesComponent', () => {
  let component: BagclosermachinesComponent;
  let fixture: ComponentFixture<BagclosermachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagclosermachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagclosermachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
