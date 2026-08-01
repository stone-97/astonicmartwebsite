import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosemasksComponent } from './nosemasks.component';

describe('NosemasksComponent', () => {
  let component: NosemasksComponent;
  let fixture: ComponentFixture<NosemasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosemasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosemasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
