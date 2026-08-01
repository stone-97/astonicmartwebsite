import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockoutstationsComponent } from './lockoutstations.component';

describe('LockoutstationsComponent', () => {
  let component: LockoutstationsComponent;
  let fixture: ComponentFixture<LockoutstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LockoutstationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LockoutstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
