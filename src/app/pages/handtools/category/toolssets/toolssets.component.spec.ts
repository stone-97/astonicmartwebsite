import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolssetsComponent } from './toolssets.component';

describe('ToolssetsComponent', () => {
  let component: ToolssetsComponent;
  let fixture: ComponentFixture<ToolssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolssetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
