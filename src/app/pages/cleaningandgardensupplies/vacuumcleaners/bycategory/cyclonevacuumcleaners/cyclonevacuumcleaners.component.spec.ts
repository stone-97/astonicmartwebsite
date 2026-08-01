import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclonevacuumcleanersComponent } from './cyclonevacuumcleaners.component';

describe('CyclonevacuumcleanersComponent', () => {
  let component: CyclonevacuumcleanersComponent;
  let fixture: ComponentFixture<CyclonevacuumcleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyclonevacuumcleanersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyclonevacuumcleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
