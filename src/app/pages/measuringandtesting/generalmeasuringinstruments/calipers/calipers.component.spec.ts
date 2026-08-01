import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalipersComponent } from './calipers.component';

describe('CalipersComponent', () => {
  let component: CalipersComponent;
  let fixture: ComponentFixture<CalipersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalipersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalipersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
