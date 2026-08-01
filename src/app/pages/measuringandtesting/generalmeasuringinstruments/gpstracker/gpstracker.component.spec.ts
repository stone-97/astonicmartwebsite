import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpstrackerComponent } from './gpstracker.component';

describe('GpstrackerComponent', () => {
  let component: GpstrackerComponent;
  let fixture: ComponentFixture<GpstrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpstrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpstrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
