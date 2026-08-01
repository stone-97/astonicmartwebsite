import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsbagsComponent } from './toolsbags.component';

describe('ToolsbagsComponent', () => {
  let component: ToolsbagsComponent;
  let fixture: ComponentFixture<ToolsbagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsbagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
