import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipethreadersComponent } from './pipethreaders.component';

describe('PipethreadersComponent', () => {
  let component: PipethreadersComponent;
  let fixture: ComponentFixture<PipethreadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipethreadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipethreadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
