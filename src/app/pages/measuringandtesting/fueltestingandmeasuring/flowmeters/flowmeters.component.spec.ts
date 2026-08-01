import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowmetersComponent } from './flowmeters.component';

describe('FlowmetersComponent', () => {
  let component: FlowmetersComponent;
  let fixture: ComponentFixture<FlowmetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowmetersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlowmetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
