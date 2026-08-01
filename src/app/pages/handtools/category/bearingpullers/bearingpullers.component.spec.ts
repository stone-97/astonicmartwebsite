import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearingpullersComponent } from './bearingpullers.component';

describe('BearingpullersComponent', () => {
  let component: BearingpullersComponent;
  let fixture: ComponentFixture<BearingpullersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BearingpullersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BearingpullersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
