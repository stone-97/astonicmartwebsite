import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandingpadsComponent } from './sandingpads.component';

describe('SandingpadsComponent', () => {
  let component: SandingpadsComponent;
  let fixture: ComponentFixture<SandingpadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandingpadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandingpadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
