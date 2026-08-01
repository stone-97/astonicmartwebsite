import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritygearsComponent } from './securitygears.component';

describe('SecuritygearsComponent', () => {
  let component: SecuritygearsComponent;
  let fixture: ComponentFixture<SecuritygearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuritygearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuritygearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
