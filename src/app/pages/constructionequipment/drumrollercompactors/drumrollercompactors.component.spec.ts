import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumrollercompactorsComponent } from './drumrollercompactors.component';

describe('DrumrollercompactorsComponent', () => {
  let component: DrumrollercompactorsComponent;
  let fixture: ComponentFixture<DrumrollercompactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrumrollercompactorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrumrollercompactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
