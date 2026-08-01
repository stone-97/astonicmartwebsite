import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClampmetersComponent } from './clampmeters.component';

describe('ClampmetersComponent', () => {
  let component: ClampmetersComponent;
  let fixture: ComponentFixture<ClampmetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClampmetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClampmetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
