import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetybootsComponent } from './safetyboots.component';

describe('SafetybootsComponent', () => {
  let component: SafetybootsComponent;
  let fixture: ComponentFixture<SafetybootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetybootsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetybootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
