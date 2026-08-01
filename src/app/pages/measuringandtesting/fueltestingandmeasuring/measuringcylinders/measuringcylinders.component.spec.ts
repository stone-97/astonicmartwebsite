import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringcylindersComponent } from './measuringcylinders.component';

describe('MeasuringcylindersComponent', () => {
  let component: MeasuringcylindersComponent;
  let fixture: ComponentFixture<MeasuringcylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringcylindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringcylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
