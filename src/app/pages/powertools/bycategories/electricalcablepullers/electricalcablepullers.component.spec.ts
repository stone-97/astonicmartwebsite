import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalcablepullersComponent } from './electricalcablepullers.component';

describe('ElectricalcablepullersComponent', () => {
  let component: ElectricalcablepullersComponent;
  let fixture: ComponentFixture<ElectricalcablepullersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricalcablepullersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricalcablepullersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
