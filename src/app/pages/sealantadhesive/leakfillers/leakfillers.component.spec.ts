import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpraypaintsComponent } from './leakfillers.component';

describe('SpraypaintsComponent', () => {
  let component: SpraypaintsComponent;
  let fixture: ComponentFixture<SpraypaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpraypaintsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpraypaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
