import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolgeneratorsComponent } from './petrolgenerators.component';

describe('PetrolgeneratorsComponent', () => {
  let component: PetrolgeneratorsComponent;
  let fixture: ComponentFixture<PetrolgeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetrolgeneratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetrolgeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
