import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualspraygunsComponent } from './manualsprayguns.component';

describe('ManualspraygunsComponent', () => {
  let component: ManualspraygunsComponent;
  let fixture: ComponentFixture<ManualspraygunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualspraygunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualspraygunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
