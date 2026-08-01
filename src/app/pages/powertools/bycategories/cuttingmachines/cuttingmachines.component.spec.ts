import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingmachinesComponent } from './cuttingmachines.component';

describe('CuttingmachinesComponent', () => {
  let component: CuttingmachinesComponent;
  let fixture: ComponentFixture<CuttingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuttingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuttingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
