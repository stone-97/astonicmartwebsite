import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordeddrillsComponent } from './cordeddrills.component';

describe('CordeddrillsComponent', () => {
  let component: CordeddrillsComponent;
  let fixture: ComponentFixture<CordeddrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordeddrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordeddrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
