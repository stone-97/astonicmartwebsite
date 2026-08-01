import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTestersComponent } from './generaltesters.component';

describe('TestersComponent', () => {
  let component: GeneralTestersComponent;
  let fixture: ComponentFixture<GeneralTestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralTestersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeneralTestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
