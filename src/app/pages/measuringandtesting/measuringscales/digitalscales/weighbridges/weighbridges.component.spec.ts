import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighbridgesComponent } from './weighbridges.component';

describe('WeighbridgesComponent', () => {
  let component: WeighbridgesComponent;
  let fixture: ComponentFixture<WeighbridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeighbridgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeighbridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
