import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdroomwearsComponent } from './coldroomwears.component';

describe('ColdroomwearsComponent', () => {
  let component: ColdroomwearsComponent;
  let fixture: ComponentFixture<ColdroomwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColdroomwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColdroomwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
