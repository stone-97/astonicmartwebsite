import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularsawsComponent } from './circularsaws.component';

describe('CircularsawsComponent', () => {
  let component: CircularsawsComponent;
  let fixture: ComponentFixture<CircularsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircularsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
