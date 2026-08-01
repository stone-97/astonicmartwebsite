import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecuttersComponent } from './pipecutters.component';

describe('PipecuttersComponent', () => {
  let component: PipecuttersComponent;
  let fixture: ComponentFixture<PipecuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipecuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipecuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
