import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyjoggersComponent } from './safetyjoggers.component';

describe('SafetyjoggersComponent', () => {
  let component: SafetyjoggersComponent;
  let fixture: ComponentFixture<SafetyjoggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyjoggersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyjoggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
