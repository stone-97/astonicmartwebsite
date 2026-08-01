import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuagesComponent } from './generalguages.component';

describe('GuagesComponent', () => {
  let component: GuagesComponent;
  let fixture: ComponentFixture<GuagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GuagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
