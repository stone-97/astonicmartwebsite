import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangingscalesComponent } from './hangingscales.component';

describe('HangingscalesComponent', () => {
  let component: HangingscalesComponent;
  let fixture: ComponentFixture<HangingscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HangingscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HangingscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
