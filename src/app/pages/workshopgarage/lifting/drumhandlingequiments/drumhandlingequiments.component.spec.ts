import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumhandlingequimentsComponent } from './drumhandlingequiments.component';

describe('DrumhandlingequimentsComponent', () => {
  let component: DrumhandlingequimentsComponent;
  let fixture: ComponentFixture<DrumhandlingequimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrumhandlingequimentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrumhandlingequimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
