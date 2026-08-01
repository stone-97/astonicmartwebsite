import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterandpumphoseComponent } from './waterandpumphose.component';

describe('PumphoseComponent', () => {
  let component: WaterandpumphoseComponent;
  let fixture: ComponentFixture<WaterandpumphoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterandpumphoseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WaterandpumphoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
