import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowercrimpingtoolsComponent } from './powercrimpingtools.component';

describe('PowercrimpingtoolsComponent', () => {
  let component: PowercrimpingtoolsComponent;
  let fixture: ComponentFixture<PowercrimpingtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowercrimpingtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowercrimpingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
