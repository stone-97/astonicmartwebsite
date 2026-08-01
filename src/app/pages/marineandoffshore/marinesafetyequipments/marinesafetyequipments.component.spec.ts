import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinesafetyequipmentsComponent } from './marinesafetyequipments.component';

describe('MarinesafetyequipmentsComponent', () => {
  let component: MarinesafetyequipmentsComponent;
  let fixture: ComponentFixture<MarinesafetyequipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarinesafetyequipmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarinesafetyequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
