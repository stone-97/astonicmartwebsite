import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrubbersandsweepersComponent } from './scrubbersandsweepers.component';

describe('ScrubbersandsweepersComponent', () => {
  let component: ScrubbersandsweepersComponent;
  let fixture: ComponentFixture<ScrubbersandsweepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrubbersandsweepersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrubbersandsweepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
