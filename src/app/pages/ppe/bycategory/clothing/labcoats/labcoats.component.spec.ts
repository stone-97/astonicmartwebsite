import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcoatsComponent } from './labcoats.component';

describe('LabcoatsComponent', () => {
  let component: LabcoatsComponent;
  let fixture: ComponentFixture<LabcoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabcoatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabcoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
