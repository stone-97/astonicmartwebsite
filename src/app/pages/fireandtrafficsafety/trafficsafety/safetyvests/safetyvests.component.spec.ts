import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyvestsComponent } from './safetyvests.component';

describe('SafetyvestsComponent', () => {
  let component: SafetyvestsComponent;
  let fixture: ComponentFixture<SafetyvestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyvestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyvestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
