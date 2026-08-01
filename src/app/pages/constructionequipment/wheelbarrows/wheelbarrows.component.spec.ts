import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelbarrowsComponent } from './wheelbarrows.component';

describe('WheelbarrowsComponent', () => {
  let component: WheelbarrowsComponent;
  let fixture: ComponentFixture<WheelbarrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelbarrowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelbarrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
