import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveltoolsComponent } from './leveltools.component';

describe('LeveltoolsComponent', () => {
  let component: LeveltoolsComponent;
  let fixture: ComponentFixture<LeveltoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeveltoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeveltoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
