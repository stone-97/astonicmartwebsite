import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheellocksComponent } from './wheellocks.component';

describe('WheellocksComponent', () => {
  let component: WheellocksComponent;
  let fixture: ComponentFixture<WheellocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheellocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheellocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
