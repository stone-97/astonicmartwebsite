import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessbruschcuttersComponent } from './cordlessbruschcutters.component';

describe('CordlessbruschcuttersComponent', () => {
  let component: CordlessbruschcuttersComponent;
  let fixture: ComponentFixture<CordlessbruschcuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessbruschcuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessbruschcuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
