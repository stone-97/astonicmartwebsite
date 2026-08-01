import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumaticjackhammersComponent } from './pneumaticjackhammers.component';

describe('PneumaticjackhammersComponent', () => {
  let component: PneumaticjackhammersComponent;
  let fixture: ComponentFixture<PneumaticjackhammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PneumaticjackhammersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PneumaticjackhammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
