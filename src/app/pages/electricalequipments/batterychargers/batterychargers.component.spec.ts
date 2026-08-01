import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterychargersComponent } from './batterychargers.component';

describe('BatterychargersComponent', () => {
  let component: BatterychargersComponent;
  let fixture: ComponentFixture<BatterychargersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatterychargersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatterychargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
