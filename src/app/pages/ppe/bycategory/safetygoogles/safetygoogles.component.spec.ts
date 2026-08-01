import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetygooglesComponent } from './safetygoogles.component';

describe('SafetygooglesComponent', () => {
  let component: SafetygooglesComponent;
  let fixture: ComponentFixture<SafetygooglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetygooglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetygooglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
