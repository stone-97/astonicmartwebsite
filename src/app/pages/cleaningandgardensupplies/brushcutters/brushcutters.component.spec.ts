import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushcuttersComponent } from './brushcutters.component';

describe('BrushcuttersComponent', () => {
  let component: BrushcuttersComponent;
  let fixture: ComponentFixture<BrushcuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrushcuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrushcuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
