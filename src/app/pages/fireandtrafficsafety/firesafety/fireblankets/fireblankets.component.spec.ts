import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireblanketsComponent } from './fireblankets.component';

describe('FireblanketsComponent', () => {
  let component: FireblanketsComponent;
  let fixture: ComponentFixture<FireblanketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireblanketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireblanketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
