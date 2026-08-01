import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsonalsafetyComponent } from './personalsafety.component';

describe('ErsonalsafetyComponent', () => {
  let component: ErsonalsafetyComponent;
  let fixture: ComponentFixture<ErsonalsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErsonalsafetyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErsonalsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
