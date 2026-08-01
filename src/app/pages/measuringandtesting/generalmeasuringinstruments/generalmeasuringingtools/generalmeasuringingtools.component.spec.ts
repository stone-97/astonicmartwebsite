import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmeasuringingtoolsComponent } from './generalmeasuringingtools.component';

describe('GeneralmeasuringingtoolsComponent', () => {
  let component: GeneralmeasuringingtoolsComponent;
  let fixture: ComponentFixture<GeneralmeasuringingtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralmeasuringingtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralmeasuringingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
