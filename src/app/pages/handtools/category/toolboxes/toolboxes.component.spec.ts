import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxesComponent } from './toolboxes.component';

describe('ToolboxesComponent', () => {
  let component: ToolboxesComponent;
  let fixture: ComponentFixture<ToolboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
