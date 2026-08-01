import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsignsComponent } from './warningsigns.component';

describe('WarningsignsComponent', () => {
  let component: WarningsignsComponent;
  let fixture: ComponentFixture<WarningsignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningsignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningsignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
