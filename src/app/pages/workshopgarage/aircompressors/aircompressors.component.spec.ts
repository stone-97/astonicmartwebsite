import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircompressorsComponent } from './aircompressors.component';

describe('AircompressorsComponent', () => {
  let component: AircompressorsComponent;
  let fixture: ComponentFixture<AircompressorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircompressorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircompressorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
