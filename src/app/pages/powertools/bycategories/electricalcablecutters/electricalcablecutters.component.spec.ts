import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalcablecuttersComponent } from './electricalcablecutters.component';

describe('ElectricalcablecuttersComponent', () => {
  let component: ElectricalcablecuttersComponent;
  let fixture: ComponentFixture<ElectricalcablecuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricalcablecuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricalcablecuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
