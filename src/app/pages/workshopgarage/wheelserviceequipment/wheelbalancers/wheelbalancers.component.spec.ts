import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelbalancersComponent } from './wheelbalancers.component';

describe('WheelbalancersComponent', () => {
  let component: WheelbalancersComponent;
  let fixture: ComponentFixture<WheelbalancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelbalancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelbalancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
