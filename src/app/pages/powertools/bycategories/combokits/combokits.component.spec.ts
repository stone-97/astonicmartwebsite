import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombokitsComponent } from './combokits.component';

describe('CombokitsComponent', () => {
  let component: CombokitsComponent;
  let fixture: ComponentFixture<CombokitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombokitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombokitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
