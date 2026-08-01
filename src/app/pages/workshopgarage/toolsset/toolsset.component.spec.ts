import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolssetComponent } from './toolsset.component';

describe('ToolssetComponent', () => {
  let component: ToolssetComponent;
  let fixture: ComponentFixture<ToolssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolssetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
