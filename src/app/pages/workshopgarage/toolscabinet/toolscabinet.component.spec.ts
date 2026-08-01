import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolscabinetComponent } from './toolscabinet.component';

describe('ToolscabinetComponent', () => {
  let component: ToolscabinetComponent;
  let fixture: ComponentFixture<ToolscabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolscabinetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolscabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
