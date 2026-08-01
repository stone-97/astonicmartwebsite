import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelalignmentguagesComponent } from './wheelalignmentguages.component';

describe('WheelalignmentguagesComponent', () => {
  let component: WheelalignmentguagesComponent;
  let fixture: ComponentFixture<WheelalignmentguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelalignmentguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelalignmentguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
