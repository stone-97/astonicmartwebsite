import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryhammerdrillsComponent } from './rotaryhammerdrills.component';

describe('RotaryhammerdrillsComponent', () => {
  let component: RotaryhammerdrillsComponent;
  let fixture: ComponentFixture<RotaryhammerdrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryhammerdrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotaryhammerdrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
