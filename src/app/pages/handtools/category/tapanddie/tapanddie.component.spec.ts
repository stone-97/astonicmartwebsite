import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapanddieComponent } from './tapanddie.component';

describe('TapanddieComponent', () => {
  let component: TapanddieComponent;
  let fixture: ComponentFixture<TapanddieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TapanddieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TapanddieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
