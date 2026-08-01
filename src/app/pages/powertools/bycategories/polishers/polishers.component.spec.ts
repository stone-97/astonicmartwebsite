import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishersComponent } from './polishers.component';

describe('PolishersComponent', () => {
  let component: PolishersComponent;
  let fixture: ComponentFixture<PolishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolishersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
