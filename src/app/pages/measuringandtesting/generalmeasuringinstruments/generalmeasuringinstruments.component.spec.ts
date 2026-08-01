import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmeasuringinstrumentsComponent } from './generalmeasuringinstruments.component';

describe('GeneralmeasuringinstrumentsComponent', () => {
  let component: GeneralmeasuringinstrumentsComponent;
  let fixture: ComponentFixture<GeneralmeasuringinstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralmeasuringinstrumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralmeasuringinstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
