import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficsafetyComponent } from './trafficsafety.component';

describe('TrafficsafetyComponent', () => {
  let component: TrafficsafetyComponent;
  let fixture: ComponentFixture<TrafficsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficsafetyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
