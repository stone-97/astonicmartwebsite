import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmequipmentsComponent } from './farmequipments.component';

describe('FarmequipmentsComponent', () => {
  let component: FarmequipmentsComponent;
  let fixture: ComponentFixture<FarmequipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmequipmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
