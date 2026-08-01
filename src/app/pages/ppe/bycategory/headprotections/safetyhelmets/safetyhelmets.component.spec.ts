import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyhelmetsComponent } from './safetyhelmets.component';

describe('SafetyhelmetsComponent', () => {
  let component: SafetyhelmetsComponent;
  let fixture: ComponentFixture<SafetyhelmetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyhelmetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyhelmetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
