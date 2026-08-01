import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchesComponent } from './workbenches.component';

describe('WorkbenchesComponent', () => {
  let component: WorkbenchesComponent;
  let fixture: ComponentFixture<WorkbenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkbenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkbenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
