import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureanalyzersComponent } from './moistureanalyzers.component';

describe('MoistureanalyzersComponent', () => {
  let component: MoistureanalyzersComponent;
  let fixture: ComponentFixture<MoistureanalyzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoistureanalyzersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoistureanalyzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
