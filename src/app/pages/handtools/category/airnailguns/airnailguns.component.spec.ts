import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirandelectricnailergunsComponent } from './airnailguns.component';

describe('AirandelectricnailergunsComponent', () => {
  let component: AirandelectricnailergunsComponent;
  let fixture: ComponentFixture<AirandelectricnailergunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirandelectricnailergunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirandelectricnailergunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
