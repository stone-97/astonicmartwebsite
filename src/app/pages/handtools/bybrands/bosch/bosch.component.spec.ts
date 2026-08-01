import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoschComponent } from './bosch.component';

describe('BoschComponent', () => {
  let component: BoschComponent;
  let fixture: ComponentFixture<BoschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoschComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
