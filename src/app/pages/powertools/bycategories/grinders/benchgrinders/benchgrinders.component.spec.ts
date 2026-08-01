import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchgrindersComponent } from './benchgrinders.component';

describe('BenchgrindersComponent', () => {
  let component: BenchgrindersComponent;
  let fixture: ComponentFixture<BenchgrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenchgrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenchgrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
