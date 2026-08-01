import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmicrometersComponent } from './digitalmicrometers.component';

describe('DigitalmicrometersComponent', () => {
  let component: DigitalmicrometersComponent;
  let fixture: ComponentFixture<DigitalmicrometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalmicrometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalmicrometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
