import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablecuttersComponent } from './cablecutters.component';

describe('CablecuttersComponent', () => {
  let component: CablecuttersComponent;
  let fixture: ComponentFixture<CablecuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CablecuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablecuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
