import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterandlabtestersComponent } from './waterandlabtesters.component';

describe('WaterandlabtestersComponent', () => {
  let component: WaterandlabtestersComponent;
  let fixture: ComponentFixture<WaterandlabtestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterandlabtestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterandlabtestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
