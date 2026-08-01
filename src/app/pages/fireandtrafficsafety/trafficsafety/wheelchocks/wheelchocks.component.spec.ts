import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelchocksComponent } from './wheelchocks.component';

describe('WheelchocksComponent', () => {
  let component: WheelchocksComponent;
  let fixture: ComponentFixture<WheelchocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelchocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelchocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
