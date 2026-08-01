import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalequipmentsComponent } from './electricalequipments.component';

describe('ElectricalequipmentsComponent', () => {
  let component: ElectricalequipmentsComponent;
  let fixture: ComponentFixture<ElectricalequipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricalequipmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricalequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
