import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessdrillsanddriversComponent } from './cordlessdrillsanddrivers.component';

describe('CordlessdrillsanddriversComponent', () => {
  let component: CordlessdrillsanddriversComponent;
  let fixture: ComponentFixture<CordlessdrillsanddriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessdrillsanddriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessdrillsanddriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
