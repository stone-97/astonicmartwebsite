import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetanddryvacuumcleanersComponent } from './wetanddryvacuumcleaners.component';

describe('WetanddryvacuumcleanersComponent', () => {
  let component: WetanddryvacuumcleanersComponent;
  let fixture: ComponentFixture<WetanddryvacuumcleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WetanddryvacuumcleanersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WetanddryvacuumcleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
