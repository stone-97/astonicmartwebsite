import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulicpumpsComponent } from './hydraulicpumps.component';

describe('HydraulicpumpsComponent', () => {
  let component: HydraulicpumpsComponent;
  let fixture: ComponentFixture<HydraulicpumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydraulicpumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydraulicpumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
