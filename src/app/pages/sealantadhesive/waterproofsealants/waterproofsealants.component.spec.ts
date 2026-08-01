import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterproofsealantsComponent } from './waterproofsealants.component';

describe('WaterproofsealantsComponent', () => {
  let component: WaterproofsealantsComponent;
  let fixture: ComponentFixture<WaterproofsealantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterproofsealantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterproofsealantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
