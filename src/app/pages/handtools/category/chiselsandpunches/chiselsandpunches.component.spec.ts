import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiselsandpunchesComponent } from './chiselsandpunches.component';

describe('ChiselsandpunchesComponent', () => {
  let component: ChiselsandpunchesComponent;
  let fixture: ComponentFixture<ChiselsandpunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChiselsandpunchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChiselsandpunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
