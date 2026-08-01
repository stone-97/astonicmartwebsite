import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandglovesComponent } from './handgloves.component';

describe('HandglovesComponent', () => {
  let component: HandglovesComponent;
  let fixture: ComponentFixture<HandglovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandglovesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandglovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
