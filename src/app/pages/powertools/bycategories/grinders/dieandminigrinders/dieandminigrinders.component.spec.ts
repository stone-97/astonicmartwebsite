import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieandminigrindersComponent } from './dieandminigrinders.component';

describe('MinigrindersComponent', () => {
  let component: DieandminigrindersComponent;
  let fixture: ComponentFixture<DieandminigrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DieandminigrindersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DieandminigrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
