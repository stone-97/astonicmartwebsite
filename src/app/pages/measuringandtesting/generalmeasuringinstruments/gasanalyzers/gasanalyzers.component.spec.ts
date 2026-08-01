import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasanalyzersComponent } from './gasanalyzers.component';

describe('GasanalyzersComponent', () => {
  let component: GasanalyzersComponent;
  let fixture: ComponentFixture<GasanalyzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasanalyzersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasanalyzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
