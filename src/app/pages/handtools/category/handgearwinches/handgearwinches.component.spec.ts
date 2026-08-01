import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandgearwinchesComponent } from './handgearwinches.component';

describe('HandgearwinchesComponent', () => {
  let component: HandgearwinchesComponent;
  let fixture: ComponentFixture<HandgearwinchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandgearwinchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandgearwinchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
