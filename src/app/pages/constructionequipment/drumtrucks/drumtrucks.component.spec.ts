import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumtrucksComponent } from './drumtrucks.component';

describe('DrumtrucksComponent', () => {
  let component: DrumtrucksComponent;
  let fixture: ComponentFixture<DrumtrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrumtrucksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrumtrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
