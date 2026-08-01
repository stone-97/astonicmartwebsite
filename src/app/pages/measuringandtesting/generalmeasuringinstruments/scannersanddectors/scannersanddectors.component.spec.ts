import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannersanddectorsComponent } from './scannersanddectors.component';

describe('ScannersanddectorsComponent', () => {
  let component: ScannersanddectorsComponent;
  let fixture: ComponentFixture<ScannersanddectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScannersanddectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScannersanddectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
