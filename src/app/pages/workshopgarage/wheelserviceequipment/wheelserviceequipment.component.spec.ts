import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelserviceequipmentComponent } from './wheelserviceequipment.component';

describe('WheelserviceequipmentComponent', () => {
  let component: WheelserviceequipmentComponent;
  let fixture: ComponentFixture<WheelserviceequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelserviceequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelserviceequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
