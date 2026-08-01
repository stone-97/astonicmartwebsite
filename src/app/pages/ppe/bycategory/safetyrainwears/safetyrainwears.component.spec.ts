import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyrainwearsComponent } from './safetyrainwears.component';

describe('SafetyrainwearsComponent', () => {
  let component: SafetyrainwearsComponent;
  let fixture: ComponentFixture<SafetyrainwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyrainwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyrainwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
