import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratoryandhearingComponent } from './respiratoryandhearing.component';

describe('RespiratoryandhearingComponent', () => {
  let component: RespiratoryandhearingComponent;
  let fixture: ComponentFixture<RespiratoryandhearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespiratoryandhearingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespiratoryandhearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
