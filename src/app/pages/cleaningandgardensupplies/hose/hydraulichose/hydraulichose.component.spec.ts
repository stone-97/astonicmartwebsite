import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulichoseComponent } from './hydraulichose.component';

describe('HydraulichoseComponent', () => {
  let component: HydraulichoseComponent;
  let fixture: ComponentFixture<HydraulichoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydraulichoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydraulichoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
