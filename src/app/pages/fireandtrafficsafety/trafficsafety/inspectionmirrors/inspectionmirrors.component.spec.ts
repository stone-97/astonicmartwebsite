import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionmirrorsComponent } from './inspectionmirrors.component';

describe('InspectionmirrorsComponent', () => {
  let component: InspectionmirrorsComponent;
  let fixture: ComponentFixture<InspectionmirrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionmirrorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectionmirrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
