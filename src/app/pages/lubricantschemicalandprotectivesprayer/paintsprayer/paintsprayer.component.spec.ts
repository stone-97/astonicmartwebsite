import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintsprayerComponent } from './paintsprayer.component';

describe('PaintsprayerComponent', () => {
  let component: PaintsprayerComponent;
  let fixture: ComponentFixture<PaintsprayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintsprayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaintsprayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
